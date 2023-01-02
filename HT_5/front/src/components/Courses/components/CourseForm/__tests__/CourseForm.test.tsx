import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import TestTemplate from '../../../../../tests/utils/TestTemplate';
import CourseForm from '../CourseForm';
import {getMockedStore} from '../../../../../tests/mocks/store';
import {mockedAuthors} from '../../../../../tests/mocks/authors';
import AlertProvider from '../../../../../context/AlertContext';
import RouterTemplate from '../../../../../tests/utils/RouterTemplate';
import {mockedCourses} from '../../../../../tests/mocks/courses';
import userEvent from '@testing-library/user-event';
import {addCourseThunkAction} from '../../../../../store/courses/courses.thunk';

const testIdFor = {
    courseForm: "course-form",
    courseActionButton: "course-form-action-button",
    author: "author",
    addAuthorButton: "course-form-author-add",
    addAuthorInput: "course-form-author-input",
    authorToSelect: "author_to_select",
    authorToSelectButton: "author_to_select-button",
    selectedAuthor: "author_selected",
    selectedAuthorButton: "author_selected-button",

    durationInput: "course-form-duration",
    titleInput: "course-form-title",
    descriptionInput: "course-form-description",
}

describe('Course form component for creation', () => {

    beforeEach(() => {
        const mockedStore = getMockedStore({ isAdmin: true, authors: mockedAuthors });

        render(
            <TestTemplate store={mockedStore}>
                <AlertProvider>
                    <CourseForm formType="CREATE"/>
                </AlertProvider>
            </TestTemplate>
        )
    });

    it('should render course form', () => {
       expect(screen.getByTestId(testIdFor.courseForm)).toBeInTheDocument();
    });

    it('should render authors to select', () => {
        expect(screen.getAllByTestId(testIdFor.authorToSelect).length).toBe(mockedAuthors.length);
    });

    it('should not have selected authors', () => {
       expect(screen.queryAllByTestId(testIdFor.selectedAuthor).length).toBe(0);
    });

    it('should add author to selected', () => {
        const addButtons = screen.queryAllByTestId(testIdFor.authorToSelectButton);

        expect(addButtons.length).not.toBe(0);

        expect(screen.queryByTestId(testIdFor.selectedAuthor)).not.toBeInTheDocument();

        userEvent.click(addButtons[0]);

        expect(screen.getByTestId(testIdFor.selectedAuthor)).toBeInTheDocument();
    });

    it('should call dispatch on form submit', () => {
        const action = { addCourseThunkAction };

        const addCourseThunkActionMock = jest.mock(action, "addCourseThunkAction");

        fireEvent.change(screen.getByTestId(testIdFor.titleInput), { target: { value: "Changed value" }});
        fireEvent.change(screen.getByTestId(testIdFor.descriptionInput), { target: { value: "Changed value" }});
        fireEvent.change(screen.getByTestId(testIdFor.durationInput), { target: { value: 25 }});

        fireEvent.click(screen.getByTestId(testIdFor.courseActionButton));

        expect(addCourseThunkActionMock).toBeCalled();
    });
});

const course = mockedCourses[0];

describe('Course form component for edit', () => {
    let mockedStore: any;

    beforeEach(() => {
        mockedStore = getMockedStore({ isAdmin: true, authors: mockedAuthors, courses: mockedCourses });

        render(
            <RouterTemplate store={mockedStore} initialEntry={`/courses/update/${course.id}`} />
        )
    });

    it('should render course form', () => {
        expect(screen.getByTestId(testIdFor.courseForm)).toBeInTheDocument();
    });

    it('should render correct length of authors to select', () => {
        expect(screen.getAllByTestId(testIdFor.authorToSelect).length).toBe(mockedAuthors.length - course.authors.length);
    });

    it('should render correct length of selected authors', () => {
        expect(screen.getAllByTestId(testIdFor.selectedAuthor).length).toBe(course.authors.length);
    });

    it('should remove selected author from course form', () => {
        cleanup();
        const courseIndex = 2;
        const course = mockedCourses[courseIndex];

        render(
            <RouterTemplate store={mockedStore} initialEntry={`/courses/update/${course.id}`} />
        )

       const removeButtons = screen.getAllByTestId(testIdFor.selectedAuthorButton);

       expect(removeButtons.length).toBe(course.authors.length);

       expect(screen.queryByTestId(testIdFor.authorToSelect)).not.toBeInTheDocument();

       userEvent.click(removeButtons[courseIndex]);

       expect(screen.getByTestId(testIdFor.authorToSelect)).toBeInTheDocument();
    });
})
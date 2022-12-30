import {fireEvent, render, screen} from '@testing-library/react';
import TestTemplate from '../../../../../tests/utils/TestTemplate';
import CourseForm from '../CourseForm';
import {getMockedStore} from '../../../../../tests/mocks/store';
import {mockedAuthors} from '../../../../../tests/mocks/authors';
import AlertProvider from '../../../../../context/AlertContext';

const testIdFor = {
    courseForm: "course-form",
    author: "author",
    addAuthorButton: "course-form-author-add",
    addAuthorInput: "course-form-author-input",
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

    it('should render authors', () => {
        expect(screen.getAllByTestId(testIdFor.author).length).toBe(mockedAuthors.length);
    });
})
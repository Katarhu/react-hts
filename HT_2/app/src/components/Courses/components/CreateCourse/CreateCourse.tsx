import {ChangeEvent, Dispatch, FormEvent, useMemo, useState} from 'react';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { formatDuration } from '../../../../utils/formatDuration';
import createId from '../../../../utils/createId';

import { IAuthor } from '../../../../models/author';
import {mockedAuthorsList, mockedCoursesList} from '../../../../constants/constants';

import './CreateCourse.css';
import { ICourse } from '../../../../models/course';
import {useNavigate} from 'react-router-dom';
import Author from "./components/Author/Author";
import {useAlert} from "../../../../context/AlertContext";


function CreateCourse() {
  const { addAlert } = useAlert();
  const [authors, setAuthors] = useState<IAuthor[]>(mockedAuthorsList);
  const [selectedAuthors, setSelectedAuthors] = useState<IAuthor[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [newAuthorName, setNewAuthorName] = useState('');
  const navigate = useNavigate();

  const cancelCreation = () => {
    navigate('/courses');
  }

  const createCourse = (event: FormEvent) => {
    event.preventDefault();

    if( !title ) return addAlert('Title is required');
    if( !description ) return addAlert('Description is required');
    if( duration === 0 ) return addAlert('Duration should be more than 0');

    const courseDate = new Date().toLocaleDateString();

    const courseAuthors = (selectedAuthors.length > 0) ?
        selectedAuthors.map((author) => author.id)
      : []

    const newCourse: ICourse = {
      id: createId(),
      title,
      duration,
      description,
      creationDate: courseDate,
      authors: courseAuthors
    }

    handleCreateCourse(newCourse);
  }

  const handleCreateCourse = (course: ICourse) => {
    mockedCoursesList.push(course);
    cancelCreation();
  }



  const commitAddingAuthor = () => {
    if (newAuthorName === '') return addAlert('Author name should not be empty');

    const authorId = createId();
    const newAuthor: IAuthor = {
      id: authorId,
      name: newAuthorName
    }

    mockedAuthorsList.push(newAuthor);
    setAuthors(() => [...mockedAuthorsList]);
    setNewAuthorName('');
  }

  const handleInputChange = (event: ChangeEvent, setState: Dispatch<string>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    setState(inputValue);
  }

  const changeCourseDuration = (event: ChangeEvent) => {
    const newDuration = +(event.target as HTMLInputElement).value;

    if (!isNaN(newDuration)) setDuration(newDuration);
    else { setDuration(0) }
  }

  const removeSelectedAuthor = (id: string) => {
    setSelectedAuthors((prev) =>
      prev.filter((author) => author.id !== id)
    )
  }

  const addSelectedAuthor = (id: string) => {
    const selected = authors.find((author) => author.id === id);
    const isSelectedChosen = selectedAuthors.find((author) => author.id === id);

    if (selected == null) return;
    if (isSelectedChosen != null) return;

    setSelectedAuthors((prev) =>
      [...prev, selected]
    )
  }

  const getAuthorsToSelect = (authors: IAuthor[]) => {

    if( !authors.length ) return <div>There is no authors to select</div>

    return authors.map((author) => {
      const isAuthorSelected = selectedAuthors.find((selectedAuthor) => selectedAuthor.id === author.id)
      if( isAuthorSelected ) return;
      return <Author key={author.id} author={author} onClick={addSelectedAuthor} buttonText='Add author'/>
    })
  }

  const getSelectedAuthors = (authors: IAuthor[]) => {
    if( !authors.length ) return <div>There is no authors to select</div>

    return authors.map((author) => (
        <Author key={author.id} author={author} onClick={removeSelectedAuthor} buttonText='Remove author'/>
    ))
  }


  const courseDuration = formatDuration(duration);
  const toSelectItems = useMemo(() => getAuthorsToSelect(authors), [selectedAuthors, authors]);
  const selectedItems = useMemo(() => getSelectedAuthors(selectedAuthors), [selectedAuthors]);

  return (
        <div className='create-course'>
            <form
                className='course-form'
                onSubmit={createCourse}
            >
              <fieldset className="course-form-head">
                <div className="course-form-head-input">
                  <Input
                      labelText='Title'
                      placeholderText='Enter title'
                      value={title}
                      onChange={(event) => handleInputChange(event, setTitle)}
                  />
                </div>
                <div className='course-form-head-buttons'>
                  <Button
                      buttonText='Go back'
                      onClick={cancelCreation}
                  />
                  <Button
                      buttonText='Create course'
                      type='submit'
                  />
                </div>
              </fieldset>

              <fieldset className='course-form-description'>
                  <label
                      className='course-form-description-label'
                      htmlFor="course-form-description-input"
                  >
                    Description
                  </label>
                  <textarea
                      id="course-form-description-input"
                      className='course-form-description-input'
                      cols={30}
                      rows={10}
                      placeholder='Enter description'
                      value={description}
                      onChange={(event) => handleInputChange(event, setDescription)}
                  >
                  </textarea>
              </fieldset>

              <div className='course-form-grid'>

                <fieldset className='course-form-create'>
                  <h2 className='course-form-title'>Add author</h2>
                  <div className='course-form-create-input'>
                    <Input
                        labelText='Author name'
                        placeholderText='Enter author name...'
                        value={newAuthorName}
                        onChange={(event) => handleInputChange(event, setNewAuthorName)}
                    />
                  </div>
                  <div className='course-form-create-button'>
                    <Button
                      buttonText='Create author'
                      onClick={commitAddingAuthor}
                    />
                  </div>
                </fieldset>

                <fieldset className='course-form-authors'>
                  <h2 className='course-form-title'>Authors</h2>
                  <div className="course-form-authors-items">
                    {toSelectItems}
                  </div>
                </fieldset>

                <fieldset className='course-form-duration'>
                  <div className='course-form-duration-input'>
                    <Input
                        labelText='Duration'
                        type='number'
                        value={duration}
                        onChange={changeCourseDuration}
                    />
                  </div>
                  <div className='course-form-duration-value'>
                    Duration: <span className='course-form-duration-bold'>{courseDuration}</span> hours
                  </div>
                </fieldset>

                <fieldset className='course-list-authors'>
                  <h2 className='course-form-title'>Course authors</h2>
                  <div className='course-form-authors-items'>
                    {selectedItems}
                  </div>
                </fieldset>

              </div>

            </form>
        </div>
  );
}

export default CreateCourse;

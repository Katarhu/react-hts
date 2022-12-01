import { useMemo, useState } from 'react';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { formatDuration } from '../../../../helpers/formatDuration';
import createId from '../../../../helpers/createId';

import { mockedAuthorsList } from '../../../../constants/constants';

import './CreateCourse.css';

function CreateCourse({ handleClose, handleCreateCourse }) {
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [newAuthorName, setNewAuthorName] = useState('');

  const cancelCreation = () => {
    handleClose();
  }

  const createCourse = () => {
    const courseDate = new Date().toLocaleDateString();

    if( !title ) {
      alert('Please enter title');
      return;
    }

    if( !description ) {
      alert('Please enter description');
      return;
    }

    const courseAuthors = (selectedAuthors.length > 0)
      ? selectedAuthors.map((author) =>
        author.id
      )
      : []

    const newCourse = {
      id: createId(),
      title,
      duration,
      description,
      creationDate: courseDate,
      authors: courseAuthors
    }

    handleCreateCourse(newCourse);
    handleClose();
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const changeAuthorInput = (event) => {
    setNewAuthorName(event.target.value);
  }

  const commitAddingAuthor = () => {
    if (newAuthorName.length <= 2 || newAuthorName.length > 10) {
      alert('Authors name should be less that 10 symbols and more than 2');
      setNewAuthorName('');
      return;
    }

    const authorId = createId();
    const newAuthor = {
      id: authorId,
      name: newAuthorName
    }

    mockedAuthorsList.push(newAuthor);
    setAuthors(() => [...mockedAuthorsList]);
    setNewAuthorName('');
  }

  const changeCourseDuration = (event) => {
    const newDuration = +event.target.value;

    if (!isNaN(newDuration)) setDuration(newDuration);
    else { setDuration(0) }
  }

  const removeSelectedAuthor = (id) => {
    setSelectedAuthors((prev) =>
      prev.filter((author) => author.id !== id)
    )
  }

  const addSelectedAuthor = (id) => {
    const selected = authors.find((author) => author.id === id);
    const isSelectedChosen = selectedAuthors.find((author) => author.id === id);

    if (selected == null) return;
    if (isSelectedChosen != null) return;

    setSelectedAuthors((prev) =>
      [...prev, selected]
    )
  }

  const getSelectedAuthors = (authors) => {
    if (authors.length === 0) return <div>Authors list is empty</div>

    return authors.map((author) =>
      <div className='create-course-author' key={author.id}>
        <p className='create-course-author-name'>{author.name}</p>
        <div className='create-course-author-button'>
          <Button
            key={author.id}
            buttonText={'Remove author'}
            onClick={() => removeSelectedAuthor(author.id)}
          />
        </div>
      </div>
    )
  }

  const getAuthorsToSelect = (authors) => {
    if (authors.length === 0) return <div>No authors to select</div>

    return authors.map((author) => {
      const isSelected = selectedAuthors.find((selected) => author.id === selected.id);

      if (isSelected != null) return <></>

      return (
        <div className='create-course-author' key={author.id}>
          <p className='create-course-author-name'>{author.name}</p>
          <div className='create-course-author-button'>
            <Button
              key={author.id}
              buttonText={'Add author'}
              onClick={() => addSelectedAuthor(author.id)}
            />
          </div>
        </div>
      )
    })
  }

  const inputDuration = formatDuration(duration);
  const authorsToSelectItems = useMemo(() => getAuthorsToSelect(authors), [authors, selectedAuthors]);
  const selectedAuthorsItems = useMemo(() => getSelectedAuthors(selectedAuthors), [selectedAuthors])

  return (
    <div className='create-course'>
      <div className='create-course-head'>
        <div className="create-course-head-input">
          <Input
            labelText={'Title'}
            placeholderText={'Enter title'}
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div className='create-course-head-buttons'>
          <Button buttonText={'Go back'} onClick={cancelCreation}/>
          <Button buttonText={'Create course'} onClick={createCourse}/>
        </div>
      </div>

      <div className='create-course-description'>
        <label
          className='create-course-description-label'
          htmlFor="textarea"
        >
          Description
        </label>
        <textarea
          className='create-course-description-input'
          onChange={handleDescriptionChange}
          id="textarea"
          placeholder='Enter description'
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <div className='create-course-grid'>
        <div className='create-course-add'>
          <h3 className='create-course-grid-title'>Add author</h3>
          <div className='create-course-add-input'>
            <Input
              labelText='Author name'
              placeholderText='Enter author name...'
              onChange={changeAuthorInput}
              value={newAuthorName}
            />
          </div>
          <div className='create-course-add-button'>
            <Button
              buttonText='Create author'
              onClick={commitAddingAuthor}
            />
          </div>
        </div>
        <div className='create-course-select'>
          <h3 className='create-course-grid-title'>Authors</h3>
          <div className='create-course-authors'>
            {authorsToSelectItems}
          </div>
        </div>
        <div className='create-course-duration'>
          <h3 className='create-course-grid-title'>Duration</h3>
          <div className='create-course-duration-input'>
            <Input
              labelText='Duration'
              placeholderText='Enter duration in minutes'
              onChange={changeCourseDuration}
              type='number'
              value={duration}
            />
          </div>
          <p className='create-course-duration-time'>
            Duration: <span className='create-course-duration-hours'>{inputDuration}</span> hours
          </p>
        </div>
        <div className='create-course-selected'>
          <h3 className='create-course-grid-title'>Course authors</h3>
          <div className='create-course-authors'>
            {selectedAuthorsItems}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;

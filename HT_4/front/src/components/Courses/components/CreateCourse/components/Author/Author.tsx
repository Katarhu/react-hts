import {memo} from "react";

import Button from "../../../../../../common/Button/Button";

import {IAuthor} from "../../../../../../models/author";


interface AuthorProps {
    author: IAuthor;
    onClick: (id: string) => void;
    buttonText: string;
}


function Author({ author, onClick, buttonText }: AuthorProps) {
    return (
        <div className='course-form-author' key={author.id}>
            <p className='course-form-author-name'>{author.name}</p>
            <div className='course-form-author-button'>
                <Button
                    buttonText={buttonText}
                    onClick={() => onClick(author.id)}
                />
            </div>
        </div>
    );
}

export default memo(Author);

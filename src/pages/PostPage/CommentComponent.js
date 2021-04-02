import React from 'react';

const CommentComponent = (props) => {
    const { comment: { name, email, body } } = props;
    return (
        <>
            <p>
                <b>{name}</b><br />
                {body}<br />
                - <a href={`mailto:${email}`}>{email}</a>
            </p>
            <hr />
        </>
    )
}

export default CommentComponent;
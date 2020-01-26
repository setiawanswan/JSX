import React from 'react';
import faker from 'faker';

const CommentDetails = () => {
    return (
        <div className="comments">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
            </div>
            <div className="metadata">
                <span className="date">Today at 6:00 PM</span>
            </div>
            <div className="text">
                Nice Blog !
            </div>
        </div>
    )
}

export default CommentDetails;
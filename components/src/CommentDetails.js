import React from 'react';
// import faker from 'faker';

const CommentDetails = (props) => {
    console.log(props)
    return (
        <div className="comments">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            </div>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">
                {props.content}
            </div>
        </div>
    )
}

export default CommentDetails;
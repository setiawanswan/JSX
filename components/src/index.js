import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author="Sam" timeAgo="Today is 4:45PM" content="Nice Blog Post" avatar={faker.image.avatar()}/>
            <CommentDetails author="Alex" timeAgo="Today is 5:15AM" content="I like Reading" avatar={faker.image.avatar()} />
            <CommentDetails author="Jane" timeAgo="Yesterday is 2:35OM" content="One of my hoby is Coding" avatar={faker.image.avatar()} />
        </div>
    )      
}

ReactDOM.render(<App/>, document.querySelector('#root'))
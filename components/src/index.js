import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning !</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetails author="Sam" timeAgo="Today is 4:45PM" content="Nice Blog Post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>    
                <CommentDetails author="Alex" timeAgo="Today is 5:15AM" content="I like Reading" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Jane" timeAgo="Yesterday is 2:35OM" content="One of my hoby is Coding" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )      
}

ReactDOM.render(<App/>, document.querySelector('#root'))
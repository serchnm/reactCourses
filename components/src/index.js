import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './commentDetail'
import ApproveCard from './approvalCard';
import Faker from 'faker'

const App = () => {
    return (
        <div className= "ui container comments">
           <ApproveCard>
            <CommentDetail 
                    author= "Sam" 
                    text="Nice Blog" 
                    date="Today at 4:46PM" 
                    avatar={Faker.image.avatar()} 
                />  
            </ApproveCard>
           <ApproveCard>
            <CommentDetail 
                    author="Alex" 
                    text=" Best React"
                    date="Today at 7:46PM"
                    avatar={Faker.image.avatar()} 
                />
           </ApproveCard>
           <ApproveCard>
            <CommentDetail 
                    author="Jane" 
                    text=" testing my component" 
                    date="Today at 4:40PM"
                    avatar={Faker.image.avatar()} 
            />
           </ApproveCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));


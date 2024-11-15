// import React from 'react'
import { useState } from 'react';
import './postFeed.css';


const PostUploder = ({setPostedValue, addPost }) => {

    const [input,setInput] = useState('');
    // const [postedValue, setPostedValue] = useState(''); // To store the posted value

    const takeInput = (event) => {
        // console.log(event.target.value);
        setInput(event.target.value); // set incoming value
    };
    
    const post = () => {
        if(input.trim()){
            addPost(input);
            setInput('');
        } else{
            console.log('input is empty');
        }
    }
return (
    <>
        <section className="post">
            <div className='post-input'>
                <div className='post-container'>
                    <input
                    type="text"
                    placeholder='Type you post content...'
                    value={input}
                    onChange={takeInput}
                    />            
                    <div 
                    className='post-btn'
                    onClick={post}
                    >Post</div>
                </div>
                <div className='hr'></div>
            </div>
        </section>
        
    </>
)
}

export default PostUploder

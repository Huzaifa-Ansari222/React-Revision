// import React from 'react'
import {postData} from './postData';
import './post.css'
import React, { useState } from 'react';

const Post = () => {

    const [like,setLike] = useState('🤍'); // Initial state: empty heart

    // A higher-order function is a function that:
    // #Takes another function as an argument, or
    // #Returns a function as its result.
    // const toggleLike = () => {
    //     setLike(prevLike => (prevLike === '🤍' ? '❤️' : '🤍'));
    // };

    const toggleLikeState = (prevLike) => {
        if(prevLike === '🤍'){
            return '❤️';
        } else{
            return '🤍';
        }
    }
    const toggleLike = (event) => {
        console.log(event); // Access the event object here if needed
        setLike(toggleLikeState); // Pass the toggleLikeState function to setLike
    }
    // when setLike get called the current state value of prevLike is current 

    /* first empty heart in like function as initail value them on click 
    toggleLike toggle fcuntion run insdie toggleLike we run setLike(toggleLikeState) means
    toggleLikeState run and insdie it  we have prevLike args means prevLike
    value is empty heart which mean initial value then it toogle value 
    */
return (
    <>
        <div className='post-container-feed'>
            <div className='post-main'>
                <p className='post-content'> {postData[0].content} </p>
                <div className='post-stats'>
                    <div className='like-delete'>
                        <div 
                            className='like-btn'
                            onClick={toggleLike}
                        >{like}
                        </div>
                        <div className='delete-btn'>🗑️</div>
                    </div>
                    <div className='count-stats'>
                        <p>Liked by {postData[0].likeCount} users</p>
                        <p>Uploaded: {postData[0].date}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Post

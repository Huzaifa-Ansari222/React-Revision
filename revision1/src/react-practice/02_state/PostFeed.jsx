// import React from 'react'
import Post from './Post';
import './postFeed.css';
import PostUploder from './PostUploder';

const PostFeed = () => {
return (
    <>
        <PostUploder/>

        <section className="feed">
            <Post/>
        </section>
        
    </>
)
}

export default PostFeed

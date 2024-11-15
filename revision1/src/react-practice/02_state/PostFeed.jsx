// import React from 'react'
import { useEffect, useState } from 'react';
import Post from './Post';
import './postFeed.css';
import PostUploder from './PostUploder';

const PostFeed = () => {
    // Retrieve stored posts from localStorage (if any)
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    const [posts, setPosts] = useState(storedPosts); // Array to store all posts
    const [postedValue, setPostedValue] = useState(''); // Shared stateto store posted value
    // 
    // Effect to store posts in localStorage whenever they change
    useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = (postContent) => {
        const newPost = { id: Date.now(), content: postContent };
        setPosts([...posts, { id: Date.now(), content: postContent }]); // Add new post to the array
    };
return (
    <>
            {/* Pass addPost function to PostUploader to add new posts */}
            <PostUploder setPostedValue={setPostedValue} addPost={addPost} />

        <section className="feed">
                {/* Map through the posts array and render multiple Post components */}
                {posts.map(post => (
                    <Post key={post.id} postedValue={post.content} />
                ))}
        </section>
        
    </>
)
}

export default PostFeed

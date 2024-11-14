# Mini Project: Social Media Post Feed

## Overview

Create a simple **Post Feed** component where users can:

- Add new posts with text content.
- Like or unlike posts.
- Delete posts.
- View the number of likes on each post.

## Features

### 1. Add Post

Create a form where users can type and submit a post. Store this in the state as an array of post objects. Each post can have the following properties:
- `id`: A unique identifier for each post.
- `content`: The text content of the post.
- `likes`: The number of likes the post has.
- `liked`: A boolean to track whether the post is liked by the user.

### 2. Display Posts

Render each post from the state as a list of cards, each containing:
- The post content (text).
- A like button.
- A delete button.
- The number of likes for the post.

### 3. Like/Unlike Post

When the "Like" button is clicked, update the like count for that post. If the post is already liked, toggle it to "unlike."

### 4. Delete Post

Add a delete button to each post that removes the post from the state.

## React Concepts to Focus On

- **State management** with `useState`.
- **Handling events** (form submission, button clicks).
- **Array manipulation** in state (add, delete, update).
- **Conditional rendering** (e.g., toggling between like/unlike state).
- **Mapping over arrays** to display each post dynamically.

## Example Post Object Structure

```js
{
  id: 1,
  content: "This is my first post!",
  likes: 0,
  liked: false
}

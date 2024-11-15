This project demonstrates how to create a simple social media profile card in React, using **props** and **components**. The profile card displays user details such as username, profile picture, bio, followers, and following.

## Goal

Create a social media profile card that:
- Displays user details like username, profile picture, bio, followers, and following.
- Uses props to pass data between components.

## Steps

### 1. Create a `ProfileCard` Component

The `ProfileCard` component accepts the following props:
- `username` (string): The username of the user.
- `profilePicture` (string, URL): URL to the profile picture.
- `bio` (string): A short bio of the user.
- `followers` (number): The number of followers the user has.
- `following` (number): The number of people the user is following.

Inside `ProfileCard`, the following elements should be displayed:
- The `username` as the title.
- The `profilePicture` as an image (`<img>` tag).
- The `bio` as a short description below the profile picture.
- The number of followers and following in a nice format (e.g., "Followers: 500", "Following: 180").


### 2. Additional Features (Optional)

#### a. Add an `isOnline` Prop to Indicate if the User is Online or Offline
- Introduce an `isOnline` prop to represent whether the user is online or offline.
- Conditionally render the online status below the profile picture:
  - If `isOnline` is `true`, display **"Online"**.
  - If `isOnline` is `false`, display **"Offline"**.

#### b. Add a Button to Follow/Unfollow the User
- Implement a button to toggle the following state of the user.
- Use **state** in the `App` component to track whether the user is being followed.
- The button text should toggle between **"Follow"** and **"Unfollow"** based on the current state.
- Pass this state and the toggle function as props to the `ProfileCard` component.


### 3. User Data Example

Below is an example of the user data object that can be passed to the `ProfileCard` component:

```javascript
export const profileData = {
    username: 'huzaifa_ansari222',
    fullname: 'Md Huzaifa Ansari',
    profilePicture: 'https://avatars.githubusercontent.com/u/96833478?v=4',
    bio:'Fullstack Web Developer | MERN Stack | JAVA,OOPs | DSA | Git',
    followers: 1500,
    following: 300,
    post: 21,
    isOnline: true,
    isFollowed :false,
    about: 'I am Md Huzaifa Ansari, a Full-Stack MERN Developer with a Bachelor degree in Information Technology from the MAKAUT Board.',
};



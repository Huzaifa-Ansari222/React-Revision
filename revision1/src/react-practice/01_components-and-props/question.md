[GOAL]
#Create a social media profile card that displays user details like username, profile picture, bio, followers, and following. You will also use props to pass data between components.

-:Steps:-

1. Create a ProfileCard Component:
-The ProfileCard component will accept the following props:
--username (string)
--profilePicture (string, URL to the profile image)
--bio (string)
--followers (number)
--following (number)

-Inside ProfileCard, display:
--The username at the top as the title.
--The profilePicture as an image (make sure to use a img tag).
--The bio as a short description under the profile picture.
--The number of followers and following in a nice format (e.g., "Followers: 500", "Following: 180").
-Optionally, you can style this component to make it look like a profile card.


2.Create a App Component:

-In the App component, create an object representing a user's data:

const user = {
  username: 'JohnDoe',
  profilePicture: 'URL', // You can use a placeholder image URL
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  followers: 1500,
  following: 300
};

Pass this user data as props to the ProfileCard component.


3.Additional Features (Optional):

-Add a isOnline prop to indicate if the user is online or offline.
--Conditionally render the online status below the profile picture:
---If isOnline is true, display "Online".
---If isOnline is false, display "Offline".

-Add a button to follow/unfollow the user:
--Use state in the App component to track whether the user is being followed.
--The button text should toggle between "Follow" and "Unfollow" based on the current state.

-Pass this state and toggle function as props to the ProfileCard component.
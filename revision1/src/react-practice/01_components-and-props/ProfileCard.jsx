import {profileData} from './profileData'
import './profileCard.css'

const ProfileCard = () => {
return (
    <>
        <div className="profile-container">
            <div className='profile-data'>
                <div className='profile'>
                    <img src={profileData.profilePicture} alt="user-profile" />
                </div>

                <div className='username'>
                    <p>{profileData.username}</p>
                    <p>{profileData.bio}</p>
                </div>
            </div>
            
            <div className='about-section'>
                <p className='user-bold' >{profileData.fullname}</p>
                <br /> <p className='user-bold'>About: </p>
                <p>{profileData.about}</p>
            </div>

            <div className='user-stats'>
                <p>{profileData.post} posts</p>
                <p>{profileData.followers} followers</p>
                <p>{profileData.following} followings</p>
            </div>
        </div>
    </>
)
}

export default ProfileCard;

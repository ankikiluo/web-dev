import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./edit.css"
const EditProfile = ({
                         // profile= {
                         //     "name": "Jose Annunziato", "handle": "jannunzi",
                         //     "profilePicture": "jose.png", "bannerPicture": "polyglot.png",
                         //     "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
                         //     "website": "youtube.com/webdevtv",
                         //     "location": "Boston, MA", "dateOfBirth": "7/7/1968", "dateJoined": "4/2009",
                         //     "followingCount": 312, "followersCount": 180
                         // }
                     }) => {
    const profile = useSelector(state => state.profileData);
    const [editedProfile, setProfile] = useState({});
    const dispatch = useDispatch();
    const editProfileClickHandler = (profile) => {
        const action = {
            type: 'edit-profile',
            profile
        };
        dispatch(action);
        // sent action to reducer
    }
    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            name: nameValue
        };
        setProfile(newName);
    }
    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        setProfile(newBio);
    }
    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newLocation = {
            location: locationValue
        };
        setProfile(newLocation);
    }
    const websiteChangeHandler = (event) => {
        const websiteValue = event.target.value;
        const newWebsite = {
            website: websiteValue
        };
        setProfile(newWebsite);
    }
    const dateOfBirthChangeHandler = (event) => {
        const birthValue = event.target.value;
        const newBirth = {
            dateOfBirth: birthValue
        };
        setProfile(newBirth);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-1 flex"><Link to="/tuiter/profile"><i className="fa fa-xmark"/></Link></div>
                <div className="col-8">
                    <div className="header text-white">Edit profile</div>
                </div>
                <div className="col-3 ">
                    <Link to="/tuiter/profile">
                        <button onClick={()=>
                            editProfileClickHandler({...profile,
                                                        name:editedProfile.name,
                                                        bio:editedProfile.bio,
                                                        location:editedProfile.location,
                                                        website:editedProfile.website,
                                                        dateOfBirth:editedProfile.dateOfBirth})}
                                className="btn edit-btn edit-btn-pos edit-btn-rounded-corners-all-around">
                        SAVE</button></Link>
                </div>
            </div>


            <div className="position-relative">
                {/*<img src="../img/spacex-starship.jpg" className="card-img-top" alt="..."/>*/}
                <div className="banner-img">
                    {/*<img alt="" src={profile.bannerPicture} className="banner"/>*/}
                    <img alt="" src="https://pbs.twimg.com/profile_banners/58987862/1599244765/600x200" className="banner"/>
                </div>
                <div className="position-absolute avatar-img-pos m-2">
                    {/*<img className="float-right profile-avatar avatar-border" src={profile.profilePicture}/>*/}
                    <img className="float-right profile-avatar avatar-border" src="https://pbs.twimg.com/profile_banners/58987862/1599244765/600x200"/>
                </div>
            </div>
            <br/>
            <br/>
            <form>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.name} value={editedProfile.name} onChange={nameChangeHandler}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="bio">Bio</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.bio} value={editedProfile.bio} onChange={bioChangeHandler}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="location">Location</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.location} value={editedProfile.location} onChange={locationChangeHandler}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="website">Website</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.website} value={editedProfile.website} onChange={websiteChangeHandler}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.dateOfBirth} value={editedProfile.dateOfBirth} onChange={dateOfBirthChangeHandler}/>
                </div>
            </form>

        </div>

    );
}
export default EditProfile;
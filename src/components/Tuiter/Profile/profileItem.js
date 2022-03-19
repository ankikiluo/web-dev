import './profile.css'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
const ProfileItem = ({
                      profile= {
                          "name": "Jose Annunziato", "handle": "jannunzi",
                          "profilePicture": "jose.png", "bannerPicture": "polyglot.png",
                          "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
                          "website": "youtube.com/webdevtv",
                          "location": "Boston, MA", "dateOfBirth": "7/7/1968", "dateJoined": "4/2009",
                          "followingCount": 312, "followersCount": 180
                      }
                  }) => {
    const dispatch = useDispatch();
    const deleteProfile = (Profile) => {
        dispatch({
                     type: 'delete-profile',
                     Profile})
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-1 flex"><i className="fa-solid fa-arrow-left text-white"/></div>
                <div className="col-11">
                    <div className="header text-white">{profile.name}</div>
                    <div className="detailed-text">21 tweets</div>
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
                <div className="position-absolute edit-btn-pos m-2">
                    <Link to="/tuiter/edit-profile"><button className="btn edit-btn edit-btn-rounded-corners-all-around">
                        Edit profile</button></Link>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <div className="header text-white">{profile.name}</div>
                <div className="detailed-text">@{profile.handle}</div>
                <div className="bio-text wd-post-padding-top-12px">{profile.bio}</div>
                <div className="wd-icons wd-post-padding-top-12px">
                    <div className="icon-padding-right-5px">
                    <span><i className="fa fa-location-dot"/></span>
                        <span> {profile.location}</span>
                    </div>
                    <div className="icon-padding-right-5px">
                    <span><i className="fa fa-birthday-cake"/></span>
                        <span> Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="icon-padding-right-5px">
                    <span><i className="fa-regular fa-calendar"/></span>
                        <span> Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="wd-icons wd-post-padding-top-12px">
                    <div className="icon-padding-right-5px">
                        <span className="bold-num"> {profile.followingCount}</span>
                        <span> Following</span>
                    </div>
                    <div className="icon-padding-right-5px">
                        <span className="bold-num"> {profile.followersCount}</span>
                        <span> Followers</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ProfileItem;
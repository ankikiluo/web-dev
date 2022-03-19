import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";
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
    const dispatch = useDispatch();
    const deleteProfile = (Profile) => {
        dispatch({
                     type: 'delete-profile',
                     Profile})
    };
    return(
        <div className="container">
            <div className="row">
                <div className="col-1 flex"><i className="fa fa-xmark"/></div>
                <div className="col-8">
                    <div className="header text-white">Edit profile</div>
                </div>
                <div className="col-3 ">
                    <Link to="/tuiter/editProfile">
                        <button className="btn edit-btn edit-btn-pos edit-btn-rounded-corners-all-around">
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
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.name} value={profile.name}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="bio">Bio</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.bio} value={profile.bio}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="location">Location</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.location} value={profile.location}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="website">Website</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.website} value={profile.website}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.dateOfBirth} value={profile.dateOfBirth}/>
                </div>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="exampleInputPassword1">Password</label>*/}
                {/*    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>*/}
                {/*</div>*/}
                {/*<div className="form-check">*/}
                {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1">*/}
                {/*        <label className="form-check-label" htmlFor="exampleCheck1">Check me*/}
                {/*            out</label></input>*/}
                {/*</div>*/}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>

    );
}
export default EditProfile;
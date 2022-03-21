import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import "./edit.css"
const EditProfile = () => {
    const profile = useSelector(state => state.profileData);
    const [val, setVal] = useState({});

    const dispatch = useDispatch();
    const editProfileClickHandler = (profile) => {
        const action = {
            type: 'edit-profile',
            profile: profile
        };
        dispatch(action);
        // sent action to reducer
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
                                                        name:val.name,
                                                        bio:val.bio,
                                                        location:val.location,
                                                        website:val.website,
                                                        dateOfBirth:val.dateOfBirth})}
                                className="btn edit-btn edit-btn-pos edit-btn-rounded-corners-all-around">
                        SAVE</button></Link>
                </div>
            </div>


            <div className="position-relative">
                {/*<img src="../img/spacex-starship.jpg" className="card-img-top" alt="..."/>*/}
                <div className="banner-img">
                    <img alt="" src={profile.bannerPicture} className="banner"/>
                </div>
                <div className="position-absolute avatar-img-pos m-2">
                    <img className="float-right profile-avatar avatar-border" src={profile.profilePicture}/>
                </div>
            </div>
            <br/>
            <br/>
            <form>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.name} value={val.name} onChange={(event) => setVal({ ...val, name: event.target.value })}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="bio">Bio</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.bio} value={val.bio} onChange={(event) => setVal({ ...val, bio: event.target.value})}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="location">Location</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.location} value={val.location} onChange={(event) => setVal({ ...val, location: event.target.value})}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="website">Website</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.website} value={val.website} onChange={(event) => setVal({ ...val, website: event.target.value})}/>
                </div>
                <div className="form-group edit-input-border edit-input-rounded-corners-all-around mb-3">
                    <label htmlFor="dateOfBirth">Date of birth</label>
                    <input type="textplain" className="form-control-plaintext" placeholder={profile.dateOfBirth} value={val.dateOfBirth} onChange={(event) => setVal({ ...val, dateOfBirth: event.target.value})}/>
                </div>
            </form>

        </div>

    );
}
export default EditProfile;
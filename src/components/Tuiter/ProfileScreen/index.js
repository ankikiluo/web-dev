import {Link} from "react-router-dom";
import React from "react";
import Profile from "../Profile";

const ProfileScreen = () => {
    return(
        <>
            <Link to="/labs">
                Labs
            </Link> |
            <Link to="/tuiter/explore">
                Explore
            </Link> |
            <Link to="/hello">
                Hello
            </Link>

            <div className="row mt-2">
                <div>
                    <Profile/>
                </div>
            </div>
        </>
    )
}
export default ProfileScreen;

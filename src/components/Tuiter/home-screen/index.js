import {Link} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import React from "react";

const HomeScreen = () => {
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
                    {HomeComponent()}
                </div>
            </div>
        </>
    )
}
export default HomeScreen;

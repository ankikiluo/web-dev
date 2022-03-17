import {Link} from "react-router-dom";
// import HomeComponent from "./HomeComponent";
import React from "react";
import WhatsHappening from "../WhatsHappening";
import TuitList from "../tuit-list";

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
                    <WhatsHappening/>
                    <TuitList/>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;

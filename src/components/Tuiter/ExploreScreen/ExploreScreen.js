import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";
import {Link} from "react-router-dom";


const ExploreScreen = () => {
    return(
        <>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/labs">
                Labs
            </Link> |
            {/*<Link to="/tuiter">*/}
            {/*    Tuiter*/}
            {/*</Link> |*/}
            <Link to="/tuiter/home">
                Tuiter Home
            </Link>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <ExploreComponent active={"For you"}/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
}
export default ExploreScreen;

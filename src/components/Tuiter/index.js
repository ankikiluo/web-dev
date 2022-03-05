import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <ExploreScreen/>
            <HomeScreen/>
        </>
    )
};
export default Tuiter;

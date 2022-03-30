// import tuits from "../data/tuits.json";
import TuitListItem from "./tuitItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../../actions/tuits-actions";


const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    return (
        <ul className="list-group">
            {tuits.map && tuits.map(tuit => {
                   return(<TuitListItem key={tuit._id}
                                 tuit={tuit}/>);
                })}
        </ul>

    );
}
export default TuitList;

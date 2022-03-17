// import tuits from "../data/tuits.json";
import TuitListItem from "./tuitItem";
import {useSelector} from "react-redux";
const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
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

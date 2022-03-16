import tuits from "./tuits.json";
import TuitListItem from "./tuitItem";
const TuitList = () => {
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

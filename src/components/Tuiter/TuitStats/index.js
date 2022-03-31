import {useDispatch} from "react-redux";
import {updateTuitLike, updateTuitThumb} from "../../actions/tuits-actions";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="wd-icons wd-post-padding-top-12px">
            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                    <i className="fa-solid fa-comment"/></span>
                <span>{tuit.stats.comments}</span>
            </div>
            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                    <i className="fa-solid fa-retweet"/></span>
                <span>{tuit.stats.retuits}</span>
            </div>
            <div className="wd-inselected wd-font-lightgray">
                <span onClick={() => updateTuitLike(dispatch, tuit)}
                      className="wd-post-padding-right-12px">
                    {tuit.liked &&
                     <i className="fa-solid fa-heart" style={{color:'red'}}/>}
                    {!tuit.liked &&
                     <i className="fa-solid fa-heart"/>}</span>
                <span>{tuit.stats && tuit.stats.likes}</span>
            </div>

            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                    <i onClick={() => updateTuitThumb(dispatch, {...tuit, thumbUp: tuit.thumbUp + 1})}
                         className="fa-solid fa-thumbs-up ms-2"/></span>
                <span>{tuit.thumbUp}</span>
            </div>
            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                <i onClick={() => updateTuitThumb(dispatch, {...tuit, thumbDown: tuit.thumbDown + 1})}
                   className="fa-solid fa-thumbs-down ms-2"/></span>
                <span>{tuit.thumbDown}</span>
            </div>

            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                    <i className="fa-solid fa-arrow-up-from-bracket"/></span>
            </div>
        </div>);
}
export default TuitStats;
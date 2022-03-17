import {useDispatch} from "react-redux";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-icons wd-post-padding-top-12px">
            <div className="wd-inselected wd-font-lightgray wd-grid-header">
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
                <span onClick={likeTuit} className="wd-post-padding-right-12px">
                    {tuit.liked &&
                     <i className="fa-solid fa-heart" style={{color:'red'}}/>}
                    {!tuit.liked &&
                     <i className="fa-solid fa-heart"/>}</span>
                <span>{tuit.stats && tuit.stats.likes}</span>
            </div>
            <div className="wd-inselected wd-font-lightgray">
                <span className="wd-post-padding-right-12px">
                    <i className="fa-solid fa-arrow-up-from-bracket"/></span>
            </div>
        </div>);
}
export default TuitStats;
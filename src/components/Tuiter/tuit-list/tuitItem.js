import './home.css'
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";
const TuitItem = ({
                    tuit= {
                        "_id": "123",
                        "topic": "Web Development",
                        "postedBy": {
                            "username": "ReactJS"
                        },
                        "liked": true,
                        "verified": false,
                        "handle": "ReactJS",
                        "time": "2h",
                        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "attachments": {
                            "image": "../img/starship.jpg"
                        },
                        "logo_image": "../img/react.jpg",
                        "avatar_image": "../img/react.jpg",
                        "stats": {
                            "comments": 123,
                            "retuits": 234,
                            "likes": 345
                        }
                    }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({
                     type: 'delete-tuit',
                     tuit})
    };
    return(
        <div className="wd-border-grey">
        <div className="wd-padding-left-16px wd-padding-top-12px wd-padding-bottom-12px">
            <div className="wd-overflow-hidden">
                <img className="wd-float-left wb-avatar" src={tuit.avatar_image}/>
                <div className="wd-overflow-hidden">
                    <span className="wd-post-padding-left-16px wd-name">{tuit.postedBy.username} <i className="fa-solid fa-circle-check"/></span>
                    <span className="wd-font-15px wd-font-lightgray">@{tuit.handle} · {tuit.time}</span>
                    <span className="wd-float-right"><a className="wd-font-lightgray">
                        <i onClick={() =>
                            deleteTuit(tuit)}
                           className="wd-post-padding-right-12px fa-solid fa-xmark"/></a>
                    </span>
                    <div className=" wd-post-padding-left-12px">
                        <div >
                            <div className="wd-text wd-bold wd-font-white ">{tuit.title}</div>
                            <div className="wd-text wd-font-lightgray">{tuit.tuit}</div>
                            {/*<div className="wd-text wd-padding-bottom-12px wd-font-lightgray">111</div>*/}
                            {
                                tuit.attachments && tuit.attachments.image &&
                                <img src={tuit.attachments.image}
                                     className="wd-text"
                                     style={{width: "100%"}}/>
                            }
                            {
                                tuit.attachments && tuit.attachments.video &&
                                <iframe width="100%" height="350px"
                                        className="wd-text"
                                        style={{width: "100%"}}
                                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            }
                        </div>

                        <TuitStats tuit={tuit}/>
                    </div>
                </div>
            </div> 
        </div> 
        </div>     
    );
}
export default TuitItem;
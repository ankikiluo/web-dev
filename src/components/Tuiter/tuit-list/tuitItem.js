import './tuit.css'
const TuitItem = ({
                    tuit= {
                        "_id": "567",
                        "topic": "Space",
                        "postedBy": {
                            "username": "SpaceX"
                        },
                        "liked": false,
                        "verified": false,
                        "handle": "spacex",
                        "title": "",
                        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                        "attachments": {
                            "image": "../img/starship.jpg"
                        },
                        "time": "last month",
                        "logo_image": "../img/node.png",
                        "avatar_image": "../img/node.png",
                        "tuits": "120K",
                        "stats": {
                            "comments": 123,
                            "retuits": 234,
                            "likes": 345
                        }
                    }
                  }) => {
    return(
        <div className="wd-border-grey">
        <div className="wd-padding-left-16px wd-padding-top-12px wd-padding-bottom-12px">
            <div className="wd-overflow-hidden">
                <img className="wd-float-left wb-avatar" src={tuit.avatar_image}/>
                <div className="wd-overflow-hidden">
                    <span className="wd-post-padding-left-16px wd-name">{tuit.postedBy.username} <i className="fa-solid fa-circle-check"/></span>
                    <span className="wd-font-15px wd-font-lightgray">@{tuit.handle} · {tuit.time}</span>
                    <span className="wd-float-right"><a className="wd-font-lightgray" href={"linktonews.html"}><i className="wd-post-padding-right-12px fa-solid fa-xmark"/></a></span>
                    <div className="wd-post-padding-left-12px wd-padding-bottom-12px wd-text wd-main-content-width wd-font-white">
                        {/*{post.postContent}*/}
                    </div>
                    {/*<div className="wd-post-padding-left-12px">*/}
                    {/*    <img className="wd-border-grey-up wb-post-content-img" src={post.postContentImg}/>*/}
                    {/*</div>*/}
                    <div className=" wd-post-padding-left-12px">
                        <div >
                            <div className="wd-text wd-bold wd-font-white ">{tuit.title}</div>
                            <div className="wd-text wd-font-lightgray">{tuit.tuit}</div>
                            <div className="wd-text wd-padding-bottom-12px wd-font-lightgray">{tuit.link}</div>
                        </div>
                        <div className="wd-icons wd-post-padding-top-12px">
                            <div className="wd-inselected wd-font-lightgray wd-grid-header">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-comment"/></span>
                                <span>{tuit.stats.comments}</span>
                            </div>
                            <div className="wd-inselected wd-font-lightgray">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-retweet"/></span>
                                <span>{tuit.stats.retuits}</span>
                            </div>
                            <div className="wd-inselected wd-font-lightgray">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-heart"/></span>
                                <span>{tuit.stats.likes}</span>
                            </div>
                            <div className="wd-inselected wd-font-lightgray">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-arrow-up-from-bracket"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        </div>     
    );
}
export default TuitItem;
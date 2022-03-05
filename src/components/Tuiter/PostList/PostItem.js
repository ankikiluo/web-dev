import '../HomeScreen/home.css'
const PostItem = ({
                    post= {avatarImg:"https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
                      name: "Elon Musk", handle: "elonmusk", time: "23h",
                      postContent: "Amazing show about @Inspiration4x mission!",
                      postContentImg: "https://pbs.twimg.com/card_img/1494914144826499072/LSbNuftg?format=jpg&name=900x900",
                      title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                      text: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
                      link: "🔗netflix.com", replyNum: "5,647", retuitNum: "4,675", likeNum: "48.5K"}
                  }
                ) => {
    return(
        <div className="wd-border-grey">
        <div className="wd-padding-left-16px wd-padding-top-12px wd-padding-bottom-12px">
            <div className="wd-overflow-hidden">
                <img className="wd-float-left wb-avatar" src={post.avatarImg}/>
                <div className="wd-overflow-hidden">
                    <span className="wd-post-padding-left-16px wd-name">{post.name} <i className="fa-solid fa-circle-check"/></span>
                    <span className="wd-font-15px wd-font-lightgray">@{post.handle} · {post.time}</span>
                    <span className="wd-float-right"><a className="wd-font-color" href={"linktonews.html"}><i className="fa-solid fa-ellipsis"/></a></span>
                    <div className="wd-post-padding-left-12px wd-padding-bottom-12px wd-text wd-main-content-width wd-font-white">
                        {post.postContent}
                    </div>
                    <div className="wd-post-padding-left-12px">
                        <img className="wd-border-grey-up wb-post-content-img" src={post.postContentImg}/>
                    </div>
                    <div className=" wd-post-padding-left-12px">
                        <div className=" wd-border-grey-down">
                            <div className="wd-text wd-bold wd-font-white ">{post.title}</div>
                            <div className="wd-text wd-font-lightgray">{post.text}</div>
                            <div className="wd-text wd-padding-bottom-12px wd-font-lightgray">{post.link}</div>
                        </div>
                        <div className="wd-icons wd-post-padding-top-12px">
                            <div className="wd-inselected wd-font-lightgray wd-grid-header">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-comment"/></span>
                                <span>{post.replyNum}</span>
                            </div>
                            <div className="wd-inselected wd-font-lightgray">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-retweet"/></span>
                                <span>{post.replyNum}</span>
                            </div>
                            <div className="wd-inselected wd-font-red">
                                <span className="wd-post-padding-right-12px"><i className="fa-solid fa-heart"/></span>
                                <span>{post.likeNum}</span>
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
export default PostItem;
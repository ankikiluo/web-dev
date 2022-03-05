import '../index.css'
const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "https://oauth.net/images/code/nodejs.png"
                             }
                         }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="wb-label">{post.topic}</div>
                    <div>
                        <span><strong>{post.userName} </strong><i className="fa-solid fa-circle-check"/></span>
                        <span className="wb-label"> - {post.time}</span>
                        <div>
                            <span>
                                <strong>{post.title}</strong>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-2 p-2">
                    <span><img className="float-right wb-post-img" src={post.image}/></span>
                </div>
            </div>    
        </li>       
    );
}
export default PostSummaryItem;
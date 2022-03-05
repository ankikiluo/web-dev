import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";
const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {posts.map(post => {
                return(<PostSummaryItem post={post}/>);
            })}
        </ul>
    );
}
export default PostSummaryList;
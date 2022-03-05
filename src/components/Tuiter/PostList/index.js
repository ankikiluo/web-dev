import posts from "./posts.json";
import PostItem from "./PostItem";
const PostList = () => {
    return(
        <ul class="list-group">
            {posts.map(post => {
        return(<PostItem post={post}/>);
    })}
        </ul>
    );
}
export default PostList;
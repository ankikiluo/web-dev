const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="wb-label">${post.topic}</div>
                    <div>
                        <span><strong>${post.userName} </strong><i class="fa-solid fa-circle-check"></i></span>
                        <span class="wb-label"> - ${post.time}</span>
                        <div>
                            <span>
                                <strong>${post.title}</strong>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-2 p-2">
                    <span><img class="float-right wb-post-img" src="${post.image}"/></span>
                </div>
            </div>    
        </li>       
    `);
}
export default PostSummaryItem;
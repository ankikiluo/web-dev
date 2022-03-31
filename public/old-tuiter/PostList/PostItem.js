const PostItem = (post) => {
    return(`
        <div class="wd-border-grey">
        <div class="wd-padding-left-16px wd-padding-top-12px wd-padding-bottom-12px">
            <div class="wd-overflow-hidden">
                <img class="wd-float-left wb-avatar" src="${post.avatarImg}">
                <div class="wd-overflow-hidden">
                    <span class="wd-post-padding-left-16px wd-name">${post.name} <i class="fa-solid fa-circle-check"></i></span>
                    <span class="wd-font-15px wd-font-lightgray">@${post.handle} · ${post.time}</span>
                    <span class="wd-float-right"><a class="wd-font-color" href="linktonews.html"><i class="fa-regular fa-ellipsis"></i></a></span>
                    <div class="wd-post-padding-left-12px wd-padding-bottom-12px wd-text wd-main-content-width wd-font-white">
                        ${post.postContent}
                    </div>
                    <div class="wd-post-padding-left-12px">
                        <img class="wd-border-grey-up wb-post-content-img" src="${post.postContentImg}">
                    </div>
                    <div class=" wd-post-padding-left-12px">
                        <div class=" wd-border-grey-down">
                            <div class="wd-text wd-bold wd-font-white ">${post.title}</div>
                            <div class="wd-text wd-font-lightgray">${post.text}</div>
                            <div class="wd-text wd-padding-bottom-12px wd-font-lightgray">${post.link}</div>
                        </div>
                        <div class="wd-icons wd-post-padding-top-12px">
                            <div class="wd-inselected wd-font-lightgray wd-grid-header">
                                <span class="wd-post-padding-right-12px"><i class="fa-regular fa-comment"></i></i></span>
                                <span>${post.replyNum}</span>
                            </div>
                            <div class="wd-inselected wd-font-lightgray">
                                <span class="wd-post-padding-right-12px"><i class="fa-regular fa-retweet"></i></i></span>
                                <span>${post.replyNum}</span>
                            </div>
                            <div class="wd-inselected wd-font-red">
                                <span class="wd-post-padding-right-12px"><i class="fa-regular fa-heart"></i></span>
                                <span>${post.likeNum}</span>
                            </div>
                            <div class="wd-inselected wd-font-lightgray">
                                <span class="wd-post-padding-right-12px"><i class="fa-regular fa-arrow-up-from-bracket"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        </div>     
    `);
}
export default PostItem;
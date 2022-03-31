const WhoToFollowListItem = (who) => {
    return(`        
        <li class="list-group-item list-group-item-action">
            <div class="row follow-row">
                <div class="col-2 p-1"  style="height:100%">
                    <span><img class="wb-avatar-img" src="${who.avatarIcon}"/></span>
                </div>
                
                <div class="col-7 p-0">
                    <div><span><strong>${who.userName} </strong><i class="fa-solid fa-circle-check"></i></span></div>
                    <div class="wd-font-color">@${who.handle}</div>
                </div>
                
                <div class="col-3 p-0 follow-btn-col">
                    <button class="btn btn-primary rounded-corners-all-around follow-btn">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
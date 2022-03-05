import '../index.css'
const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../img/nasa.jpg',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }) => {
    return(
        <li className="list-group-item list-group-item-action">
            <div className="row follow-row">
                <div className="col-2 p-1">
                    <span><img className="wb-avatar-img" src={who.avatarIcon}/></span>
                </div>
                
                <div className="col-7 p-0">
                    <div><span><strong>{who.userName} </strong><i className="fa-solid fa-circle-check"/></span></div>
                    <div className="wd-font-color">@{who.handle}</div>
                </div>
                
                <div className="col-3 p-0 follow-btn-col">
                    <button className="btn btn-primary rounded-corners-all-around follow-btn">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
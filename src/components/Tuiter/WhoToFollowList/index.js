import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
const WhoToFollowList = () => {
    return(
            <div>
                <ul className="list-group">
                    {/* row mb-3*/}
                    <li className="list-group-item list-group-item-action">
                        <p><strong>Who to follow</strong></p>
                    </li>
                    {who.map(who => {
                            return(<WhoToFollowListItem who={who}/>);
                    })
                    }
                </ul>
            </div>
    );
}
export default WhoToFollowList;
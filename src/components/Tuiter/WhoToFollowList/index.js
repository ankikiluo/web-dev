import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state);
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
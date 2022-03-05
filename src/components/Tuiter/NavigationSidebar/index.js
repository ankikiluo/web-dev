import React from "react";
import NavigationItem from "./NavigationItem";
import links from "./links.json";
const NavigationSidebar = ({active}) => {
    return(
        <>
        <div className="list-group">
            {links.map(link => {
                return(<NavigationItem link={link} active={active}/>);
            })}
        </div>
        <div className="d-grid mt-2">
            <a className="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
        </>
    );
}
export default NavigationSidebar;

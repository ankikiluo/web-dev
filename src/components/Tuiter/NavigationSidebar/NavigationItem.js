import {Link} from "react-router-dom";
const NavigationItem = ({
                            link = {
                                link:"/",
                                fontAwesome: "fab fa-twitter",
                                linkName: ""
                            }, active
                        }) => {
    return(
     <Link to={link.link} className={`list-group-item list-group-item-action ${link.linkName=== active ? 'active':''}`}>
         <div className="row">
            <div className="col-2"><i className={`${link.fontAwesome}`}/></div>
            <div className="col-10 d-none d-xl-inline"><span>{link.linkName}</span></div>
        </div>
    </Link>
    );
}
export default NavigationItem;
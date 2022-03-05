const NavTag = ({
                     tag = {
                         link: '#',
                         tagName: 'For you',
                     }, active
                 }) => {
    return(
        <li className="nav-item">
            <a className={`nav-link ${tag.tagName===active ? 'active':''}`} href={tag.link}>{tag.tagName}</a>
        </li>
    );
}
export default NavTag;
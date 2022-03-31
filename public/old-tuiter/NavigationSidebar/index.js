import links from "./links.js";
import NavigationItem from "./NavigationItem.js";
const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            ${links.map(link => {
                return(NavigationItem(link, active));
            }).join('')}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;

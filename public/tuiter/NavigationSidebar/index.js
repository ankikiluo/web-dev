const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-home"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Home</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action active" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-hashtag"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Explore</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-bell"></i></div>
                        <div class="col-10 d-lg-none d-xl-block "><span>Notifications</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-envelope"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Messages</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-bookmark"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Bookmarks</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fa-solid fa-list"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Lists</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa fas fa-user"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>Profile</span></div>
                    </div></a>
                <a class="list-group-item list-group-item-action" href="/">
                    <div class="row">
                        <div class="col-2"><i class="fa-solid fa-ellipsis"></i></div>
                        <div class="col-10 d-lg-none d-xl-block"><span>More</span></div>
                    </div></a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

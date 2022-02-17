import PostList from "../PostList/index.js";

const HomeComponent = () => {
    return(`
<!--            <div class="mb-3 row mt-2 explore-bar">-->
<!--                <div class="p-0 col-10">-->
<!--                    <i class="fas fa-magnifying-glass fa-fw explore-bar-pos"></i>-->
<!--                    <label style="width: 100%" for="explore-content">-->
<!--                        <input class="form-control" placeholder="Search Tuiter" type="text" id="explore-content">-->
<!--                    </label>-->
<!--                </div>-->

<!--                <div class="display-inline col-2 p-0">-->
<!--                    <a href="#"><span><i class="fa-solid fa-gear fa-2x gear-pos "></i></span></a>-->
<!--                </div>-->
<!--            </div>-->


<!--            <ul class="nav mb-2 nav-tabs">-->
<!--                &lt;!&ndash; tabs &ndash;&gt;-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="#">For you</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="#">Trending</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="#">News</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" href="#">Sports</a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link active" href="#">Entertainment</a>-->
<!--                </li>-->
<!--            </ul>-->
            <!-- image with overlaid text -->
            ${PostList()}              
            
    `);
}
export default HomeComponent;

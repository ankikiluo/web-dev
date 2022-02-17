import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="mb-3 row mt-2 explore-bar">
                <div class="p-0 col-10">
                    <i class="fas fa-magnifying-glass fa-fw explore-bar-pos"></i>
                    <label style="width: 100%" for="explore-content">
                        <input class="form-control" placeholder="Search Tuiter" type="text" id="explore-content">
                    </label>
                </div>

                <div class="display-inline col-2 p-0">
                    <a href="#"><span><i class="fa-solid fa-gear fa-2x gear-pos "></i></span></a>
                </div>
            </div>


            <ul class="nav mb-2 nav-tabs">
                <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <!-- image with overlaid text -->
            <div class="position-relative mb-2">
                <img src="../../img/spacex-starship.jpg" class="card-img-top" alt="...">
                <div class="position-absolute card-title-pos">
                    <span class="card-title-font">SpaceX's Starship</span>
                </div>
            </div>
            ${PostSummaryList()}
            
           
    `);
}
export default ExploreComponent;

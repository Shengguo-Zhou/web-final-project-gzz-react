import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
           <div class="row">
            <!-- search field and cog -->
              <div class="col-10 position-relative">
                <div class="wd-search">
                  <i class="fa fa-search wd-tuitter-grey"></i>
                  <input type="text" class="form-control rounded-pill text-secondary" placeholder="Search Tuitter">
                </div>
              </div>
              <!-- gear -->
              <div class="col-1 ps-0 m-auto">
                <a href="explore-settings.html">
                  <i class="fa fa-cog"></i>
                </a>
              </div>
           </div>
           <ul class="nav mt-2 mb-2 nav-tabs">
                      <!-- tabs -->
            <li class="nav-item">
              <a class="nav-link active" href="#"><span>For you</span></a>
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
              <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
            </li>
           </ul>
           <!-- create center image -->
          <div class="position-relative pt-1">
            <img alt="starship" src="../images/cybertruck.webp" width="100%">
            <div class="position-absolute bottom-0 left-0 text-white">
              <div>Tesla earnings call • LIVE</div>
              <h1>Tesla's Cybertruck</h1>
            </div>
            <h1 class="position-absolute bottom-0 left-0 text-white">Tesla's Cybertruck</h1>
          </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;


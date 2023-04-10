const NavigationSidebar = (active) => {
  return(`
        <div class="list-group">
          <a href="#" class="list-group-item">
            <i class="fab fa-twitter"></i>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="home" ? "active":""}">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-inline">Home</span>
          </a>

          <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active==="explore" ? "active":""}">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-inline">Explore</span>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="notifications" ? "active":""}">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="messages" ? "active":""}">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline">Messages</span>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="bookmarks" ? "active":""}">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline">Bookmarks</span>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="topArticles" ? "active":""}">
            <i class="fa fa-fire"></i>
            <span class="d-none d-xl-inline">Top Articles</span>
          </a>

          <a href="../profile.html" class="list-group-item list-group-item-action ${active==="profile" ? "active":""}">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-inline">Profile</span>
          </a>

          <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active==="more" ? "active":""}">
            <i class="fa fa-ellipsis-h"></i>
            <span class="d-none d-xl-inline">More</span>
          </a>
        </div>
        <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>

 `);
}
export default NavigationSidebar;


import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
           <ul class="list-group">
            <li class="list-group-item fw-bold fs-5">Who to follow</li>
             ${who.map(whoItem => {return (WhoToFollowListItem(whoItem));}).join('')}
           </ul>
           
           <div class="row">
            <span>
              <a class="text-secondary wd-terms-bs" href="#">Terms of Service &nbsp &nbsp</a>
              <a class="text-secondary wd-terms-bs" href="#">Privacy Policy &nbsp &nbsp</a>
              <a class="text-secondary wd-terms-bs" href="#">Cookie Policy &nbsp &nbsp</a>
            </span>
            <span>
              <a class="text-secondary wd-terms-bs" href="#">Accessibility &nbsp &nbsp</a>
              <a class="text-secondary wd-terms-bs" href="#">Ads info &nbsp &nbsp</a>
              <a class="text-secondary wd-terms-bs" href="#">More... &nbsp &nbsp</a>
            </span>
            <a class="text-secondary wd-terms-bs" href="#"><i class="fa fa-copyright"></i> 2023 Tuiter, Inc. </a>
          </div>
      `);
}

export default WhoToFollowList;

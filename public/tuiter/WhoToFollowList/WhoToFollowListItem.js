const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-2">
              <img class="rounded-circle" src=${who.avatarIcon} height="50px" width="50px" alt="tesla">
            </div>
            <div class="col-7">
              <div class="fw-bold">${who.userName} <i class="fa fa-check-circle wd-tuitter-blue"></i></div>
              <div>@${who.handle}</div>
            </div>
            <div class="col-3">
              <button class="btn rounded-pill text-white bg-primary float-end">Follow</button>
            </div>
          </div>
        </li>
  `);
}
export default WhoToFollowListItem;
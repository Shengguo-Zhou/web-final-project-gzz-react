const PostSummaryItem = (post) => {
  return (`
          <li class="list-group-item">
            <div class="row">
              <!--post details-->
              <div class="col-9">
                <div class="text-secondary">${post.topic}</div>
                ${post.userName
      ? `<div class="fw-bold">${post.userName} <i class="fa fa-check-circle wd-tuitter-blue"></i><span class="text-secondary fw-normal"> - ${post.time} </span></div>`
      : ""}
                <div class="fw-bold">${post.title}</div>
                ${post.tweets
      ? `<div class="text-secondary">${post.tweets} Tweets</div>` : ""}
              </div>
              <!--post diagram-->
           
                ${post.image
      ? `<div class="col-3 my-auto mx-auto"> <img class="float-end rounded" src=${post.image} height="100px" width="100px" alt="img"</div>`
      : `<div class="col-1 my-10 mx-auto"><i class="fa fa-ellipsis-h"></i></div>`}
              
            </div>
          </li>
    `)
}
export default PostSummaryItem;
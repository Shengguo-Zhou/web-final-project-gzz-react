const PostItem = (post) => {
  return(`
          <li class="list-group-item border-secondary">
            <div class="row">
              <div class="col-2">
                <img class="float-end rounded-circle" height="50px" width="50px" src=${post.userImg} alt="userImage">
              </div>
              <div class="col-10">
                <div class="row">
                  <div class="col-11">
                    <span class="fw-bolder">${post.userName} </span> <i class="fa fa-check-circle wd-tuitter-blue"></i><span
                            class="text-secondary"> @${post.handle} · ${post.time}</span>
                  </div>
                  <div class="col-1 my-10 mx-auto"><i class="fa fa-ellipsis-h text-secondary"></i></div>
                </div>
                
                <div class="mb-1 mt-1">${post.message}</div>
             
                <div class="border border-secondary rounded">
                  <img class="rounded" src=${post.img} width="100%" alt="postImage">
                  ${post.title ? `<div class="border-secondary p-1">${post.title}</div>` : ""}
                  ${post.content ? `<div class="text-secondary p-1">${post.content}</div>` : ""}
                  ${post.source ? `<div class="text-secondary p-1"><i class="fa fa-link"></i> ${post.source}</div>` : ""}
                </div>
                
                <div class="row text-secondary pt-2" >
                  <div class="col-3"><i class="fa fa-comment wd-hollow"></i> ${post.comment}</div>
                  <div class="col-3"><i class="fa fa-retweet"></i> ${post.retweet}</div>
                  <div class="col-3"><i class="fa fa-heart wd-hollow"></i> ${post.like}</div>
                  <div class="col-3"><i class="fa fa-share wd-hollow"></i></div>
                </div>
              </div>
            </div>
          </li>
   `);
}
export default PostItem;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk, logoutThunk } from "../../services/users-thunks";
import { useNavigate } from "react-router";

function ProfileItem() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  return (
      <div className="border rounded">
        <div className="row">
          <div className="col-1 my-auto">
            <i onClick={()=>navigate("/home")} className="bi bi-arrow-left ps-3 col-1 fs-5 text-secondary"/>
          </div>
          <div>
          {currentUser && (
              <div className="col-11 ps-3">
            <h5>{currentUser.firstName} {currentUser.lastName}</h5>
          </div>)}
        </div>

        <div className="position-relative">
          {currentUser && ( <img className="position-absolute wd-profile-picture rounded-circle "
               src={currentUser.avatar}
               height={100} width={100}
               alt="profile_picture"/>)}
          {currentUser && (<button onClick={()=>navigate("/edit-profile")}
                  className="rounded-pill btn btn-outline-secondary text-dark mt-2 ps-3 pe-3 float-end fw-bold">
            Edit profile
          </button>)}
        </div>
        <br/>

        <div className="mt-5 p-3">
          {currentUser && (<h5 className="fw-bold">{currentUser.firstName} {currentUser.lastName}</h5>)}
          {currentUser && (<div className="text-secondary">@{currentUser.username}</div>)}

          <div className="mb-2">
            {currentUser && (<span className="me-4 text-secondary"><i className="bi bi-geo-alt me-2"/>AGE: {currentUser.age}</span>)}
            {currentUser && ( <span className="me-4 text-secondary"><i className="bi bi-balloon me-2"/>PHONE: {currentUser.phone}</span>)}
            {currentUser && (<span className="me-4 text-secondary"><i className="bi bi-calendar3 me-2"/>LEVEL: {currentUser.role}</span>)}
          </div>}

        </div>
        </div>
        {currentUser && ( <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(logoutThunk());
                      navigate("/login");
                    }}
                >
                  Logout
                </button>)}
      </div>

  );
};
export default ProfileItem;
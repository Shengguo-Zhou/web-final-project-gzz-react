import React from "react";
import {useNavigate} from 'react-router-dom';

const ProfileItem = (
    {
      profile
    }
) => {
  const navigate = useNavigate();
  // specify UTC time zone
  const dob = new Date(profile.dateOfBirth + 'T00:00:00Z');
  const doj = new Date(profile.dateJoined + 'T00:00:00Z');
  //transfer numerical month to word month
  const formattedDobDate = new Intl.DateTimeFormat('en-US',
      { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }).format(dob);
  const formattedDojDate = new Intl.DateTimeFormat('en-US',
      { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }).format(doj);

  return (
      <div className="border rounded">
        <div className="row">
          <div className="col-1 my-auto">
            <i onClick={()=>navigate("/tuiter/home")} className="bi bi-arrow-left ps-3 col-1 fs-5 text-secondary"/>
          </div>

          <div className="col-11 ps-3">
            <h5>{profile.firstName} {profile.lastName}</h5>
            <div className="text-secondary">{profile.tuits} Tuits</div>
          </div>
        </div>

        <div className="position-relative">
          <img className="w-100"
               src={profile.bannerPicture}
               alt="banner_picture"/>
          <img className="position-absolute wd-profile-picture rounded-circle "
               src={profile.profilePicture}
               height={100} width={100}
               alt="profile_picture"/>
          <button onClick={()=>navigate("/tuiter/edit-profile")}
                  className="rounded-pill btn btn-outline-secondary text-dark mt-2 ps-3 pe-3 float-end fw-bold">
            Edit profile
          </button>
        </div>
        <br/>

        <div className="mt-5 p-3">
          <h5 className="fw-bold">{profile.firstName} {profile.lastName}</h5>
          <div className="text-secondary">{profile.handle}</div>
          <p className="text-dark">{profile.bio}</p>

          <div className="mb-2">
            <span className="me-4 text-secondary"><i className="bi bi-geo-alt me-2"/>{profile.location}</span>
            <span className="me-4 text-secondary"><i className="bi bi-balloon me-2"/>Born {formattedDobDate}</span>
            <span className="me-4 text-secondary"><i className="bi bi-calendar3 me-2"/>Joined {formattedDojDate}</span>
          </div>

          <div>
            <span className="me-4">{profile.followingCount} <span className="text-secondary">Following</span></span>
            <span>{profile.followersCount} <span className="text-secondary">Followers</span></span>
          </div>
        </div>
      </div>
  );
};
export default ProfileItem;
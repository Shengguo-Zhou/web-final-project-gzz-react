import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {editProfile} from "../profile/profile-reducer";
import "../profile/index.css";
const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(profile.firstName + " " + profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [dob, setDOB] = useState(profile.dateOfBirth);

  const saveProfileHandler = () => {
    const names = name.split(" ");
    if (names.length >= 2) {
      const newProfile = {
        ...profile,
        firstName: names[0],
        lastName: names[1],
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: dob,
      }
      dispatch(editProfile(newProfile))
    }else {
      alert("Please enter First Name and LastName, use space to split them.")
    }
  }


  return (
      <div className="border rounded mb-3">
        <div className="row py-2">
          <i onClick={()=>navigate("/tuiter/profile")} className="col-1 fs-5 bi bi-x-lg ps-3 fs-5"/>

          <div className="col-11 ps-5">
            <h4 className="d-inline">Edit Profile</h4>
            <div
                className="btn btn-dark float-end rounded-pill me-2"
                onClick={() => {
                  saveProfileHandler();
                  navigate("/tuiter/profile");
                }}
            >
              Save
            </div>
          </div>
        </div>

        <div className="position-relative">
          <img className="w-100"
               src={profile.bannerPicture}
               alt="banner_picture"/>
          <img className="position-absolute wd-profile-picture rounded-circle"
               src={profile.profilePicture}
               width={100}
               height={100}
               alt="profile_picture"/>
        </div>
        <br/>

        <div className="mt-5 px-3">
          <label htmlFor="name" className="text-secondary">Name</label><br/>
          <input
              className="w-100 border rounded"
              id="name"
              type="text"
              placeholder="FirstName LastName"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-3 px-3">
          <label htmlFor="bio" className="text-secondary">Bio</label><br/>
          <textarea
              className="w-100 border rounded"
              id="bio"
              placeholder="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="mt-3 px-3">
          <label htmlFor="location" className="text-secondary">Location</label><br/>
          <input
              className="w-100 border rounded"
              id="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="mt-4 px-3">
          <label htmlFor="website" className="text-secondary">Website</label><br/>
          <input
              id="website"
              type="text"
              className="w-100 border rounded"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="mt-4 px-3 pb-3">
          <label htmlFor="dob" className="text-secondary">Birth date</label><br/>
          <input
              id="dob"
              type="date"
              className="w-100 border rounded"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
          />
        </div>
      </div>
  )
}

export default EditProfile;
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
import LeftSideLogoBar from "./left-side-bar/LeftSideLogoBar";
import LoginComponent from "./login";
import RegisterComponent from "./register";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import usersReducer from "./reducers/users-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider, useSelector} from "react-redux";
const store = configureStore({reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer, users: usersReducer}});

function Tuiter() {
  return (
      <Provider store={store}>

        <div style={{"background": "black"}}>

          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-2 mt-2 mb-2"}>
                  <LeftSideLogoBar/>
              </div>
              <div className={"col-10 mb-5"}>
                <div className={"row"} style={{alignContent: "end"}}>
                  <div className="mt-2">
                    <NavigationSidebar/>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                       style={{"position": "relative"}}>
                    <Routes>
                      <Route path="/" element={<HomeComponent/>} />
                      <Route path="home"    element={<HomeComponent/>}/>
                      <Route path="explore" element={<ExploreComponent/>}/>
                      <Route path="profile" element={<ProfileComponent/>}/>
                      <Route path="edit-profile" element={<EditProfile/>}/>
                      <Route path="login" element={<LoginComponent/>}/>
                      <Route path="register" element={<RegisterComponent/>}/>
                    </Routes>
                  </div>

                      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList />
                      </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </Provider>
  );
}


export default Tuiter





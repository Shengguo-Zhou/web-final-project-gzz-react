// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { loginThunk } from "../../services/users-thunks";
//
// function LoginComponent() {
//   const { currentUser } = useSelector((state) => state.users);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const login = () => {
//     try {
//       dispatch(loginThunk({ username, password }));
//       navigate("/profile");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//       <div>
//         <h1>Login</h1>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//               type="text"
//               className="form-control"
//               value={username}
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//               type="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//           />
//         </div>
//         <button onClick={login} className="btn btn-primary">
//           Login
//         </button>
//         <div>
//           {currentUser && (
//               <div>
//                 <h2>{currentUser.username}</h2>
//                 <h2>{currentUser.password}</h2>
//               </div>
//           )}
//         </div>
//       </div>
//   );
// }
//
// export default LoginComponent;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../../services/users-thunks";

const LoginComponent = () => {
  let userInfo = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInfo); // hook

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async () => {
    if (!user.username || !user.password) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      await dispatch(loginThunk(user)).unwrap();
      setSuccess(true);
      // Wait 1 seconds before redirecting to /profile
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch {
      setSuccess(false);
    }
  };

  // Show password toggler
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Success message
  const [success, setSuccess] = useState(null);

  return (
      <div className="row">
        <div className="col-10 col-sm-10 col-md-8 col-lg-4 col-xl-4 mx-auto">
          <h1 className="fw-bold text-center py-3">Log In</h1>
          <div className="list-group-item">
            {success === true && (
                <div className="alert alert-success text-center">
                  {" "}
                  <p className="m-0">
                    Succesfully logged in
                    <br />
                    Redirecting to profile page...
                  </p>
                </div>
            )}
            {success === false && <div className="alert alert-danger text-center">Unable to log in</div>}
            <div className="form-floating">
              <input
                  type="text"
                  className="form-control"
                  id="usernameField"
                  placeholder="Username"
                  maxLength={64}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <label htmlFor="usernameField">Username</label>
            </div>
            <div className="form-floating mt-3">
              <input
                  type={showPassword ? "text" : "password"}
                  className="form-control position-relative"
                  id="passwordField"
                  placeholder="Password"
                  maxLength={64}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <label htmlFor="passwordField">Password</label>
              <i
                  type="button"
                  className={`${
                      showPassword ? "bx bxs-show" : "bx bxs-hide"
                  } text-secondary bx-sm position-absolute wd-visibility`}
                  onClick={handlePasswordToggle}
              />
            </div>
            <div className="wd-register-btn py-4">
              <button className="btn btn-primary btn-lg rounded-pill" onClick={loginHandler}>
                Log In
              </button>
            </div>
          </div>

          <h6 className="text-center">
            Don't have an account?
          </h6>
          <button onClick={()=>navigate("/register")}
                  className="rounded-pill btn btn-outline-secondary text-dark mt-2 ps-3 pe-3 float-end fw-bold">
            Register here
          </button>
        </div>
      </div>
  );
};
export default LoginComponent;
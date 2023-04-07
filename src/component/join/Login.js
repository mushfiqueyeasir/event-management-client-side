import React, { useContext, useState } from "react";
import google from "../../assets/images/icons8-google-96.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
const Login = ({ swapJoinPage }) => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [resetEmail, setResetEmail] = useState("");

  const setResetEmailFromInput = (event) => {
    setResetEmail(event.target.value);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      toast.success("Welcome!");
    });
  };

  const handleForgetPassword = async (event) => {
    event.preventDefault();

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(resetEmail)) {
      await sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          toast.info("Password Reset Email Sent!!");
        })
        .catch((error) => {
          if (error.message === "Firebase: Error (auth/user-not-found).")
            toast.error("User Not Found!");
        });
    } else {
      toast.error("Invalid Email!");
    }
  };

  const handelEmailPasswordLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Welcome!");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).")
          toast.error("Invalid Email!");
        else if (error.message === "Firebase: Error (auth/wrong-password).")
          toast.error("Invalid Password!");
      });
  };

  return (
    <div className="hero min-h-[93vh]  ">
      <div className="hero-content flex-col lg:flex-row px-0">
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
          <figure className="w-[100%] w3-animate-left h-[30rem]">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/premium-photo/job-interview-recruitment-process-new-team-member-company-recruit-new-candidate_42957-9692.jpg?w=1800)",
              }}
            >
              <div className="hero-content hero-overlay bg-opacity-90 text-center text-neutral-content">
                <div className="w-[18.5rem] lg:w-[28rem]">
                  <h1 className="mb-5 text-4xl font-bold">New Here?</h1>
                  <p className="mb-5">
                    Create a account with your personal information to explore
                    the Smart CV and Resume we made just for you!
                  </p>
                  <button
                    className="btn bg-[#4a685a] hover:bg-[#25362E] border-0"
                    onClick={swapJoinPage}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </figure>

          <div className="card-body justify-center zoom">
            <div className="w-[18.5rem] lg:w-[28rem] ">
              <form onSubmit={handelEmailPasswordLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                    onBlur={setResetEmailFromInput}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <button
                      className="label-text-alt link link-hover"
                      onClick={handleForgetPassword}
                    >
                      Forgot password?
                    </button>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#4a685a] hover:bg-[#25362E] "
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="divider">OR</div>

              <div className="form-control items-center">
                <button
                  className="btn btn-circle bg-[#FFFFFF]  border-0 hover:scale-125 hover:bg-[#FFFFFF]"
                  onClick={handleGoogleSignIn}
                >
                  <img src={google} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { updateProfile } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = ({ swapJoinPage }) => {
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );

  const handelEmailPasswordLogin = async (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      if (password.length > 7) {
        await createUserWithEmailAndPassword(email, password).then(() => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              toast.success("Welcome!");
            })
            .catch((error) => {
              toast.error("Email Already Exist!");
            });
        });
      } else {
        toast.error("Password length must be bigger than 7!");
      }
    } else {
      toast.error("Password and Confirm Password didn't matched!");
    }
  };

  return (
    <div className="hero min-h-[93vh] ">
      <div className="hero-content flex-col lg:flex-row px-0">
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row ">
          <div className="card-body  zoom  justify-center">
            <div className="w-[18.5rem]  lg:w-[28rem]">
              <form onSubmit={handelEmailPasswordLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#4a685a] hover:bg-[#25362E] "
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <figure className="w-[100%] w3-animate-right h-[30rem]">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
              }}
            >
              <div className="hero-content hero-overlay bg-opacity-90 text-center text-neutral-content">
                <div className="w-[18.5rem] lg:w-[28rem]">
                  <h1 className="mb-5 text-3xl font-bold">Already A Member?</h1>
                  <p className="mb-5">
                    Please Login to join some life changing events and grow
                    yourself!
                  </p>
                  <button
                    className="btn bg-[#4a685a] hover:bg-[#25362E] border-0"
                    onClick={swapJoinPage}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

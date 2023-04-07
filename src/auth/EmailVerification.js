import React, { useState } from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const EmailVerification = () => {
  const [information, setInformation] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [sendEmailVerification, error] = useSendEmailVerification(auth);
  if (error) {
    toast.error("Verification Email Failed!");
  }

  const sendVerificationEmail = async (event) => {
    await sendEmailVerification(auth);
    toast.info("Verification Email Sent!");
    if (!error) {
      event.target.innerHTML = "Resend Verification Email!";
      setInformation(
        "Please check your spam folder if you  don't find  the  email!"
      );

      !refresh &&
        toast.info("Press refresh button if you Verified your Email!", {
          autoClose: false,
        });
      setRefresh(true);
    }
  };

  const reloadPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div className="hero h-[93vh]">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://LazyLoadImage.freepik.com/premium-photo/recruitment-concept-hiring-new-talented-specialists-international-company-handshake-sign-employment-agreement-social-media-hologram-icons-table-with-documents_269648-2168.jpg?w=1380"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl  font-semibold text-center">
            Email Confirmation
          </h2>
          <p className="py-3">
            You are almost ready to get your smart CV and Resume. Simply Verify
            your email address and you are good go.
          </p>
          <div className="card-actions flex-row justify-center">
            {refresh && (
              <button
                className="btn btn-square glass  hover:bg-slate-700  bg-slate-600 "
                onClick={reloadPage}
              >
                <span className="material-symbols-outlined">refresh</span>
              </button>
            )}

            <button
              className="btn bg-[#4a685a] hover:bg-[#25362E]"
              onClick={sendVerificationEmail}
            >
              Verify email address
            </button>
          </div>
          <p className="font-semibold text-center">{information}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;

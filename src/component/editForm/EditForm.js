import React, { useContext, useState } from "react";
import CustomInputField from "../customInputField/CustomInputField";

import {
  imageUploadDiv,
  imageUploadBox,
  file,
  layer,
  iconsStyle,
  profileImageCX,
  uploadLogoText,
  fileNameCX,
} from "./styledClass";

import { toast } from "react-toastify";
import { create } from "../../hooks/create";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";
import PostLoading from "./PostLoading";
import { convertImage } from "../../utility/imageResize";
import { update } from "../../hooks/update";

const EditForm = ({ data }) => {
  const { user, eventsRefetch, userEventsRefetch } = useContext(GLOBAL_CONTEXT);

  const {
    _id,
    eventImage,
    eventTitle,
    eventDescription,
    eventLocation,
    startDate,
    endDate,
    startTime,
    endTime,
  } = data;

  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const [eventImageUpdate, setEventImageUpdate] = useState(eventImage);

  const handleProfileImage = (event) => {
    const size = event.target.files[0].size;
    if (size < 5000000) {
      setFileName(event.target.files[0].name);
      convertImage(event.target.files[0], setEventImageUpdate, setLoading);
    } else {
      toast.error("Max image limit 5MB!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      eventImage: eventImageUpdate,
      eventTitle: event.target.eventTitle.value,
      eventLocation: event.target.eventLocation.value,
      eventDescription: event.target.eventDescription.value,
      startDate: event.target.startDate.value,
      endDate: event.target.endDate.value,
      startTime: event.target.startTime.value,
      endTime: event.target.endTime.value,
      eventCreator: user.email,
    };

    update({
      id: `events/${_id}`,
      data: data,
      refetch: eventsRefetch,
      userRefetch: userEventsRefetch,
      loading: setPostLoading,
    });
  };

  return (
    <>
      <div
        className={`container mx-auto py-10  md:w-3/4 lg:w-3/6 px-3 ${
          postLoading && "opacity-30"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className={profileImageCX}>
            <div className={imageUploadDiv}>
              <div
                className={imageUploadBox}
                style={{
                  backgroundImage: `url(${eventImage})`,
                }}
              >
                {loading ? (
                  <PostLoading small={true} />
                ) : (
                  <input
                    type="file"
                    name="photo"
                    className={file}
                    onChange={handleProfileImage}
                    formEncType="multipart/form-data"
                    accept="image/*"
                  />
                )}
                <div className={layer(eventImage)}>
                  <div className={iconsStyle}>
                    {!loading && (
                      <img
                        src="https://mez.ink/mezink-web/_next/static/images/invoice/imageLogo.png"
                        alt="uploadImageThumbnail"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={uploadLogoText}>Event Image</h2>
              <h2 className={fileNameCX}>
                {fileName
                  ? fileName.length <= 15
                    ? fileName
                    : fileName.slice(0, 8) +
                      "..." +
                      fileName.slice(fileName.indexOf("."))
                  : "No file chosen"}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInputField
              type="text"
              label={"Event Title"}
              name="eventTitle"
              defaultValue={eventTitle}
              required={true}
              spanFull={true}
              widthHalf={true}
            />
            <CustomInputField
              type="text"
              label={"Event Location"}
              name="eventLocation"
              defaultValue={eventLocation}
              required={true}
              spanFull={true}
              widthHalf={true}
            />
            <CustomInputField
              type="text"
              label={"Event Description"}
              name="eventDescription"
              defaultValue={eventDescription}
              required={true}
              spanFull={true}
              textArea={true}
            />

            <CustomInputField
              type="date"
              label={"Start Date"}
              name="startDate"
              defaultValue={startDate}
              required={true}
            />
            <CustomInputField
              type="date"
              label={"End Date"}
              name="endDate"
              defaultValue={endDate}
              required={true}
            />

            <CustomInputField
              type="time"
              label={"Start Time"}
              name="startTime"
              defaultValue={startTime}
              required={true}
            />
            <CustomInputField
              type="time"
              label={"End Time"}
              name="endTime"
              defaultValue={endTime}
              required={true}
            />
          </div>
          <div className="pt-6  flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className={`btn btn-outline`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      {postLoading && <PostLoading />}
    </>
  );
};

export default EditForm;

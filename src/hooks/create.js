import axios from "axios";
import { toast } from "react-toastify";
// import { getToken } from "../utility/Constant";

export const create = ({
  endPoint,
  data,
  refetch,
  userRefetch,
  reset,
  loading,
  imageThumbReset,
  fileNameReset,
}) => {
  loading(true);
  const headers = {
    // Authorization: "Bearer " + getToken(),
    "Content-Type": "application/json",
  };

  axios({
    method: "post",
    url: `${process.env.REACT_APP_API_URL}/${endPoint}`,
    data: data,
    headers: headers,
  })
    .then(function (response) {
      if (refetch) {
        refetch();
      }
      if (userRefetch) {
        userRefetch();
      }
      if (reset) {
        reset();
      }
      if (imageThumbReset) {
        imageThumbReset(null);
      }
      if (fileNameReset) {
        fileNameReset("No file chosen");
      }
      toast.success("Event Created!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) => {
      console.log(error);

      toast.error(error.response.data.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .finally(() => {
      if (loading) {
        loading(false);
      }
    });
};

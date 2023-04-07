import axios from "axios";
import { toast } from "react-toastify";

export const update = ({ id, data, refetch, userRefetch, rsvp, loading }) => {
  axios({
    method: "PUT",
    url: `${process.env.REACT_APP_API_URL}/${id}`,
    data: data,
  })
    .then(function (response) {
      if (refetch) {
        refetch();
      }
      if (userRefetch) {
        userRefetch();
      }
      toast.success(
        `${rsvp ? "Event Reserved" : "Event Updated"} Successfully`,
        {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    })
    .catch(function (response) {
      //handle error
      console.log(response);
      toast
        .error(response.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        .finally(() => {
          if (loading) {
            loading(false);
          }
        });
    });
};

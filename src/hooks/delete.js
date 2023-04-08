import { toast } from "react-toastify";
// import { getToken } from "../utility/Constant";

export const deleteItem = ({ id, refetch, userRefetch }) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + getToken(),
    },
  };
  fetch(`${process.env.REACT_APP_API_URL}/${id}`, requestOptions)
    .then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson && (await response.json());

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      } else {
        if (refetch) {
          refetch();
        }
        if (userRefetch) {
          userRefetch();
        }
        toast.info("Event Deleted", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((error) => {
      toast.error(error, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};

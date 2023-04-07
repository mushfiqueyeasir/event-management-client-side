import axios from "axios";

export const convertImage = async (image, setImage, loading) => {
  if (loading) {
    loading(true);
  }
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "pjajpjjt");
  try {
    await axios
      .post("https://api.cloudinary.com/v1_1/dfgq8scq0/image/upload", formData)
      .then(function (response) {
        console.log(response);
        setImage(response.data.url);
      })
      .finally(() => {
        if (loading) {
          loading(false);
        }
        console.log("asdasdf");
      });
  } catch (error) {
    console.log(error);
  }
};

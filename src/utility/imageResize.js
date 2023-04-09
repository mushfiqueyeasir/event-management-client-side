export const convertImage = async (image, setImage, loading) => {
  if (loading) {
    loading(true);
  }
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "pjajpjjt");
  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfgq8scq0/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImage(data.url);
  } catch (error) {
    console.log(error);
  } finally {
    if (loading) {
      loading(false);
    }
  }
};

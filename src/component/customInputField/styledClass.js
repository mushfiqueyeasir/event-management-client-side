import "./style.css";

export const inputContainerCX = (spanFull, widthHalf) => {
  return spanFull
    ? `border-2 border-solid rounded-lg border-gray-400 px-3 col-span-full ${
        widthHalf && "lg:w-2/6"
      } `
    : "border-2 border-solid rounded-lg border-gray-400 px-3";
};

export const legendCx = "px-2 font-semibold ";

export const inputCX = "customInput";

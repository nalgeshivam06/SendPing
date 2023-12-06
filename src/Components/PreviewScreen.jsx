import React from "react";
import { useLocation } from "react-router-dom";

const generateItemJSX = (item) => {
  switch (item.name) {
    case "img":
      return (
        <div
          key={item.id}
          className="imgDropzone"
          style={{
            
            ...item.style,

          }}
        >
          {item.file ? (
            <img
              src={URL.createObjectURL(item.file)}
              alt="PlaceHolder"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <div>Image Placeholder</div>
          )}
        </div>
      );

    case "text":
      return (
        <div
          key={item.id}
          className="textDropzone"
          style={{
            ...item.style,
          }}
        >
          <div className="quillContainer">
            <div
              dangerouslySetInnerHTML={{ __html: item.text }}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      );
      case "button":
        return (
          <div
            key={item.id}
            className="buttonPreview"
            style={{
              ...item.style,
            }}
          >
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              width:'6vw'
            }}>
            {item.btntext}
            </div>
          </div>
        );
    // Add cases for other item names...

    default:
      return null;
  }
};

const PreviewScreen = () => {
  const location = useLocation();
  const droppedItems = location.state.droppedItems;
  console.log(droppedItems)
  return (
    <div className="mainContainer w-full h-full flex justify-center">
      <div className="preview-screen flex justify-center items-center flex-col w-[50vw] p-1  ml-2 h-full border border-gray-950 ">
      {droppedItems.map((item) => generateItemJSX(item))}
    </div>
    </div>
  );
};

export default PreviewScreen;

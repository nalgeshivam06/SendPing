import React from "react";
import { useLocation } from "react-router-dom";

const PreviewScreen = () => {
  const location = useLocation();
  const droppedItems = location.state?.droppedItems || [];
  
  return (
    <div className="preview-screen flex justify-center items-center flex-col">
      {droppedItems.map((item, index) => {
        const { name, style, file, text, iconSrc } = item;
        const key = `${name}-${index}`;

        const renderContent = () => {
          switch (name) {
            case "img":
              return (
                <div
                  className="imgDropzone"
                  style={{
                    ...style,
                  }}
                  key={key}
                >
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
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
                <div className="textDropzone" style={style} key={key}>
                  {text}
                </div>
              );
            case "button":
              return (
                <div className="buttonDropzone" style={style} key={key}>
                  <div className="btn">{text || "Button"}</div>
                </div>
              );
            case "itext":
              return (
                <div className="itext" style={style} key={key}>
                  <h1>{text}</h1>
                </div>
              );
            case "icons":
              return (
                <div className="icons" style={style} key={key}>
                  <img src={iconSrc} alt={name} />
                </div>
              );
            default:
              return null;
          }
        };

        return renderContent();
      })}
    </div>
  );
};

export default PreviewScreen;

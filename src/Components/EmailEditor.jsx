import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Dndstyle.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiTextAlignLeft,CiTextAlignCenter,CiTextAlignRight,CiAlignBottom,CiAlignTop, CiAlignCenterH, CiAlignCenterV} from "react-icons/ci";
const Dnd = () => {
  const [items, setItems] = useState([
    { id: 1, name: "img" },
    { id: 2, name: "text" },
    { id: 3, name: "button" },
  ]);

  const [droppedItem, setDroppedItem] = useState([]);
  const [editorText, setEditorText] = useState("");
  const [textCounter, setTextCounter] = useState(1);
  const [imageCounter, setImageCounter] = useState(1);
  const [buttonCounter, setbuttonCounter] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [imglink, setImglink] = useState(null);
  const [imgtype, setImgtype] = useState(false);
  const [userImgSrc, setUserImgSrc] = useState("");
  const [quillInstances, setQuillInstances] = useState({});
  const [visibleQuillId, setVisibleQuillId] = useState(null);

  const [style, setStyle] = useState({
    e: null,
    id: null,
  });
  const [styleit, setStyleit] = useState([]);
  const handleTextChange = (value) => {
    setEditorText(value);
  };
  useState(() => {
    if (style.e && style.id) {
      setStyleit([...styleit, { e: style.e, id: style.id }]);
    }
    imglink && setDroppedItem([...droppedItem, imglink]);
  });
  const [, imgDrag] = useDrag({
    type: "ITEM",
    item: { id: 1, name: "img" },
  });

  const [, textDrag] = useDrag({
    type: "ITEM",
    item: { id: 2, name: "text" },
  });
  const [, buttonDrag] = useDrag({
    type: "ITEM",
    item: { id: 3, name: "button" },
  });
  const [, drop] = useDrop({
    accept: "ITEM",
    isOver: (item) => handleDrop(item.id),
    drop: (item) => handleDrop(item.id),
  });
  const handleDrop = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    if (selectedItem.name === "text") {
      const newTextItem = {
        ...selectedItem,
        text: `Text ${textCounter}`,
        id: `${textCounter} Text`,
      };
      setTextCounter(textCounter + 1);
      setDroppedItem([...droppedItem, newTextItem]);
    } else if (selectedItem.name === "img") {
      const newImageItem = {
        ...selectedItem,
        file: null,
        id: `${imageCounter} img`,
        key: `${imageCounter} img`,
      };
      setImageCounter(imageCounter + 1);
      setDroppedItem([...droppedItem, newImageItem]);
    } else {
      const newbuttonItem = {
        ...selectedItem,
        id: `${buttonCounter} Button`,
      };
      setbuttonCounter(buttonCounter + 1);
      setDroppedItem([...droppedItem, newbuttonItem]);
    }
  };
  const handleDelete = (id) => {
    setDroppedItem(droppedItem.filter((item) => item.id !== id));
  };
  const handleSelect = (e, id) => {
    if (e && e.target && id) {
      setStyle({ e: e, id: id });
    } else {
      setStyle({ e: null, id: null });
    }
  };
  const elemJustify = (value) => {
    if (style.e.target.parentElement) {
      style.e.target.parentElement.style.justifyContent = value;
      setDroppedItem([...droppedItem]);
    }
  };
  const alignFunc = (value) => {
    if (style.e.target) {
      style.e.target.style.alignItems = value;
      setDroppedItem([...droppedItem]);
    }
  };
  const quillRef = useRef();

  const handleEditor = (e) => {
    if (e.target && e.target.parentElement.children[2]) {
      const editorContainer = e.target.parentElement.children[2];
      editorContainer.style.display =
        editorContainer.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <>
      <div
        className="main"
        style={{
          display: "flex",
          height: "100vh",
          width: "85vw",
          overflow: "hidden",
        }}
      >
        <div
          className="draggableItem"
          style={{
            display: "flex",
            width: "12%",
            height: "full",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="img-container"
            ref={imgDrag}
            name="img"
            id="imgId"
            draggable
            style={{
              background: "rgb(255 92 92 / 47%)",
              width: "100%",
              height: "20%",
              display: "flex",
              fontWeight: "bold",
              color: "rgb(255 10 75 / 85%)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
           Image 
          </div>
          <div
            className="text-container"
            ref={textDrag}
            name="text"
            id="textId"
            draggable
            style={{
              background: "rgb(76 175 80 / 65%)",
              width: "100%",
              height: "20%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "darkgreen",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
        Text
          </div>
          <div
            className="button-container"
            ref={buttonDrag}
            name="button"
            id="buttonId"
            draggable
            style={{
              background: "#87ceebd9",
              width: "100%",
              height: "20%",
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              alignItems: "center",
              color: "blue",
              borderRadius: "8px",
            }}
          >
          Button
          </div>
        </div>
        <div
          onDoubleClick={() => handleSelect()}
          className="dropzone"
          ref={drop}
          style={{
            width: "60%",
            display: "flex",
            border: "2px solid #dddd",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1%",
            gap: "0.2rem",
            marginLeft: "2%",
            overflowY: "auto",
          }}
        >
          {droppedItem.map((item, index) => (
            <div key={index}>
              {item.name === "img" ? (
                <div
                  onClick={(e) => handleSelect(e, item.id)}
                 
                  className="imgDropzone"
                  style={{
                    width: "49vw",
                    height: "50vh",
                    objectFit: "contain",
                    border: "2px dashed #ff5c5c",
                    color: "black",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ...item.style,
                  }}
                >
                  {item.file ? (
                    <img
                      src={
                        imgtype ? userImgSrc : URL.createObjectURL(item.file)
                      }
                      alt="PlaceHolder"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setDroppedItem((prevItems) =>
                          prevItems.map((prevItem) =>
                            prevItem.id === item.id
                              ? { ...prevItem, file: e.target.files[0] }
                              : prevItem
                          )
                        )
                      }
                    />
                  )}
                </div>
              ) : item.name === "text" ? (
                <div
                  onClick={(e) => handleSelect(e, item.id)}
                 
                  className="textDropzone"
                  style={{
                    width: "49vw",
                    height: "50vh",
                    border: "2px dashed #4caf50",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: " flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <FaEdit
                    onClick={(e) => handleEditor(e)}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  <div className="quillContainer" ref={quillRef}>
                    <ReactQuill
                      value={item.text}
                      onChange={(value) =>
                        setDroppedItem((prevItems) =>
                          prevItems.map((prevItem) =>
                            prevItem.id === item.id
                              ? { ...prevItem, text: value }
                              : prevItem
                          )
                        )
                      }
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, false] }],
                          [
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                          ],
                          [
                            { list: "ordered" },
                            { list: "bullet" },
                            { indent: "-1" },
                            { indent: "+1" },
                          ],
                          ["link", "image"],
                          ["clean"],
                        ],
                      }}
                      formats={[
                        "header",
                        "bold",
                        "italic",
                        "underline",
                        "strike",
                        "blockquote",
                        "list",
                        "bullet",
                        "indent",
                        "link",
                        "image",
                      ]}
                    />
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    width: "49vw",
                    height: "6vh",
                    color: "#fff",
                    borderRadius: "8px",
                    border: "2px dashed #87ceeb",
                    display: "flex",
                    cursor: "pointer",
                    justifyContent: "center",
                    ...item.style,
                  }}
                  onClick={(e) => handleSelect(e, item.id)}
                  className="buttonDropzone"
                 
                >
                  <div
                    className="btn"
                    style={{
                      width: "5vw",
                      textAlign: "center",
                      background: "#6495ED",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Button
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="controls"
          style={{
            width: "25%",
            border: "2px solid",
            overflowY: "auto",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Styles</h1>

          {droppedItem && style.id ? (
            <>
             <div style={{
              display:'flex',
             }}>
             <div className="btnRem" style={{
              background: "#ff5f5f",
              color: "white",
              width: "70%",
              height: "30",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",

             }} onClick={()=>handleDelete(style.id)}>Remove <RiDeleteBin5Fill/></div>
             <div className="selectedDiv" style={{
              background: "rgb(0 144 162)",
              color: "white",
              textAlign: "center",
              borderRadius: "20px",
              width: "29%",
             }}>{style.id}</div>
             </div>
              {style.id.split(" ", 2)[1] === "Text" && (
                <div className="text">
                  <h4>Background Color</h4>
                  <input
                    type="color"
                    value={style.e.target.style.background}
                    onChange={(e) => {
                      style.e.target.style.backgroundColor = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Font Size</h4>
                  <input
                    type="number"
                    value={parseInt(style.e.target.style.fontSize) || ""}
                    onChange={(e) => {
                      style.e.target.style.fontSize = `${e.target.value}px`;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Font Color</h4>
                  <input
                    type="color"
                    value={style.e.target.style.color}
                    onChange={(e) => {
                      style.e.target.style.color = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                    name=""
                    id=""
                  />
                  <h4>Dimensions</h4>
                  <div>
                    <label>Width:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={48}
                      value={parseInt(style.e.target.style.width) || ""}
                      onChange={(e) => {
                        style.e.target.style.width = `${e.target.value}vw`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Height:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={50}
                      value={
                        parseInt(style.e.target.style.height) ||
                        ""
                      }
                      onChange={(e) => {
                        style.e.target.style.height = `${e.target.value}vh`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                </div>
              )}

              {style.id.split(" ", 2)[1] === "img" && (
                <div className="img">
                  <h4>Background Color</h4>
                  <input
                    type="color"
                    value={style.e.target.style.backgroundColor}
                    onChange={(e) => {
                      style.e.target.style.backgroundColor = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Dimensions</h4>
                  <div>
                    <label>Width:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={50}
                      value={parseInt(style.e.target.style.width) || ""}
                      onChange={(e) => {
                        style.e.target.style.width = `${e.target.value}vw`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Height:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={50}
                      value={parseInt(style.e.target.style.height) || ""}
                      onChange={(e) => {
                        style.e.target.style.height = `${e.target.value}vh`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                </div>
              )}

              {style.id.split(" ", 2)[1] === "Button" && (
                <div className="btn">
                  <h4>Text Content</h4>
                  <input
                    type="text"
                    value={style.e.target.textContent}
                    onChange={(e) => {
                      style.e.target.textContent = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Background Color</h4>
                  <input
                    type="color"
                    value={style.e.target.style.backgroundColor}
                    onChange={(e) => {
                      style.e.target.style.backgroundColor = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Text Color</h4>
                  <input
                    type="color"
                    value={style.e.target.style.color}
                    onChange={(e) => {
                      style.e.target.style.color = e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Font Size</h4>
                  <input
                    type="number"
                    minLength={0}
                    maxLength={100}
                    value={parseInt(style.e.target.style.fontSize) || ""}
                    onChange={(e) => {
                      style.e.target.style.fontSize = `${e.target.value}px`;
                      setDroppedItem([...droppedItem]);
                    }}
                  />
                  <h4>Dimensions</h4>
                  <div>
                    <label>Width:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={100}
                      value={parseInt(style.e.target.style.width) || ""}
                      onChange={(e) => {
                        style.e.target.style.width = `${e.target.value}%`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Height:</label>
                    <input
                      type="number"
                      minLength={0}
                      maxLength={100}
                      value={parseInt(style.e.target.style.height) || ""}
                      onChange={(e) => {
                        style.e.target.style.height = `${e.target.value}%`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                  <div>
                    <label>Radius:</label>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      max={300}
                      value={parseInt(style.e.target.style.borderRadius) || ""}
                      onChange={(e) => {
                        style.e.target.style.borderRadius = `${e.target.value}px`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                    <h4>scale</h4>
                    <input
                      type="number"
                      value={style.e.target.style.transform.scale}
                      onChange={(e) => {
                        style.e.target.style.transform = `scale(${e.target.value})`;
                        setDroppedItem([...droppedItem]);
                      }}
                    />
                  </div>
                  {/* <h4>Vertical</h4>
                  <select
                    value={style.e.target.parentElement.style.alignItems || ""}
                    onChange={(e) => {
                      style.e.target.parentElement.style.alignItems =
                        e.target.value;
                      setDroppedItem([...droppedItem]);
                    }}
                  >
                    <option value="flex-start">Top</option>
                    <option value="center">Middle</option>
                    <option value="flex-end">Bottom</option>
                  </select> */}
                  <h4 style={{
                    textAlign: "center",
                  }}>Horizontal</h4>
                  <div
                    className="justifyBtn"
                    style={{
                      fontSize: "1.75rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div onClick={() => elemJustify("flex-start")}><CiTextAlignLeft/></div>
                    <div onClick={() => elemJustify("center")}><CiTextAlignCenter/></div>
                    <div onClick={() => elemJustify("flex-end")}><CiTextAlignRight/></div>
                  </div>
                  <h4 style={{
                    textAlign: "center",
                  }}>TextAlign</h4>
                  <div
                    className="justifyBtn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div className="justifyBtn" style={{
                      fontSize: "1.65rem",
                    }}>
                      <div onClick={() => alignFunc("flex-start")}><CiAlignTop/></div>
                      <div onClick={() => alignFunc("center")}><CiAlignCenterV/></div>
                      <div onClick={() => alignFunc("flex-end")}><CiAlignBottom/></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dnd;

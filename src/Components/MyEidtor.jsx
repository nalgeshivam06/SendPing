import React,{ useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function MyEditor (){

    const [value,setValue]=useState('');

    return(
    <ReactQuill className="w-fit mb-20" theme="snow" value={value} onChange={setValue} />
    );
    


    
}
export default MyEditor;
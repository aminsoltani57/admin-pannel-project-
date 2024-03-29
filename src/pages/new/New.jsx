import React from 'react';
import { Label } from 'recharts';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/SideBar/Sidebar';
import "./new.scss"
import {useState} from "react";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
// import  DriveFolderUploadOutlinedIcon  from '@mui/icons-material/DriveFolderUploadOutlined';
const New = ({inputs, title}) => {
    const [file, setFile]= useState("");
    console.log(file)
    return ( <div className='new'>
         <Sidebar />
         <div className="newContainer">
             <Navbar />
             <div className="top"><h1>{title}</h1></div>
             <div className="bottom">
                 <div className="left">
                     <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                      alt="image" />
                 </div>
                 <div className="right">
                     <form >
                         <div className="formInput">
                             <label htmlFor="file">
                               Image:   <CreateNewFolderIcon className='icon' />
                                 </label>
                             <input type="file" placeholder='John_Doe ' id='file' onChange={e=> setFile(e.target.files[0])} style={{display:"none"}} />
                         </div>
                         {inputs.map(input=>(
   <div className="formInput" key={input.id}>
   <label>{input.label}</label>
   <input type={input.type} placeholder={input.placeholder} />
</div>
                         ))}
                   
                         <button>send</button>
                     </form>
                 </div>
             </div>
         </div>
    </div> );
}
 
export default New;

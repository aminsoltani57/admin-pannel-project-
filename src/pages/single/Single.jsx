import React from 'react';
import "./single.scss"
import Chart from "../../components/chart/Chart"
import Sidebar from "../../components/SideBar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"

import Lists from '../../components/table/Lists';
const Single = () => {
    return ( <div className='single'>
        <Sidebar />
<div className="singleContainer">
<Navbar />
<div className="top">
    <div className="left">
        <div className="editButton">Edit</div>
         <h1 className="title">Information</h1>
         <div className="item">
             
             <img src="data:image/jpeg;base64,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"
              alt="" className="itemImg" />
             <div className="details">
                 <h1 className="itemTitle">jane Doe</h1>
                 <div className="detailItem">
                     <span className="itemKey">Email:</span>
                     <span className="itemValue">janedoe@gmail.com</span>
                 </div>
                 <div className="detailItem">
                     <span className="itemKey">Phone:</span>
                     <span className="itemValue">+1 2658 67 30</span>
                 </div>
                 <div className="detailItem">
                     <span className="itemKey">Address:</span>
                     <span className="itemValue">Elton St. 234 Graden Yd. NewYork</span>
                 </div>
                 <div className="detailItem">
                     <span className="itemKey">Country:</span>
                     <span className="itemValue">USA</span>
                 </div>
             </div>
         </div>
    </div>
    <div className="right">
        <Chart  aspect={3 / 1} title="User Spending (Last 6 Month)"/>
    </div>

</div>
<div className="bottom"></div>
<h1 className="title">Last Transactions</h1>
<Lists />
</div>
    </div> );
}
 
export default Single;

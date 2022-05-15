import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import {ExitToAppIcon, PermIdentityIcon, SettingsApplicationsIcon ,} from '@mui/icons-material/ExitToApp';
import { Link } from "react-router-dom";
import { darkModeContext } from "../../context/DarkModeContext";
import { useContext } from "react";
const Sidebar = () => {
    const {dispatch}=useContext(darkModeContext);
    return ( <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">lamadmin</span>
            </Link>
            
            </div>
        <hr />
        <div className="center">
           <ul>
               <p className="title">MAIN</p>
               <li>
                   <DashboardIcon className="icon" />
                   <span>Dashboard</span>
               </li>
               <p className="title">LISTS</p>
               <Link to="/users" style={{textDecoration:"none"}}>
               <li>
               
               <PersonOutlineIcon className="icon" />
                   <span>Users</span>
               </li>
               </Link>
               <Link to="/products" style={{textDecoration:"none"}}>
               <li><Inventory2Icon className="icon" />
                   <span>Products</span>
               </li>
               </Link>
               <li><FilterFramesIcon className="icon" />
                   <span>Orders</span>
               </li>
               <li>
                   <LocalShippingIcon className="icon" /><span>Delivery</span>
               </li>
               <p className="title">USEFULL </p>
               <li><QueryStatsIcon className="icon" />
                   <span>Stats</span>
               </li>
               <li>
                   <NotificationsNoneIcon className="icon" />
                   <span>Notifications</span>
               </li>
               <p className="title">SERVICE</p>
               <li><LocalHospitalIcon className="icon"/>
                   <span>System Health</span>
               </li>
               
               <li>
               <PsychologyIcon className="icon" />
                   <span>Logs</span>
               </li>
               <li><SettingsApplicationsIcon className="icon" />
                   <span>Settings</span>
               </li>
               <p className="title">USER</p>
               <li><PermIdentityIcon className="icon" />
                   <span>Profile</span>
               </li>
               <li><ExitToAppIcon className="icon" />
                   <span>Logout</span>
               </li>

           </ul>
        </div>
        <div className="bottom">
            <div className="coloroptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="coloroptions" onClick={()=>dispatch({type:"DARK"})}></div>
            
        </div>
    </div> );
}
 
export default Sidebar;
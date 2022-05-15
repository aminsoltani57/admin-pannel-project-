import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import {useContext} from "react"
import {darkModeContext} from "../../context/DarkModeContext"
const Navbar = () => {
    const {dispatch}=useContext(darkModeContext)
    return ( <div className="navbar">
      <div className="wrapper">
          <div className="search">
              <input type="text" placeholder="search.." />
              <SearchOutlinedIcon /> </div>
              <div className="items">
                  <div className="item">
                      <LanguageOutlinedIcon className="icon" />
                      English
                  </div>
                  <div className="item">
                      <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>
                      
                  </div>
                  <div className="item">
                      <FullscreenOutlinedIcon className="icon" />
                     
                  </div>
                  <div className="item">
                      <LanguageOutlinedIcon className="icon" />
                     
                  </div>
                  <div className="item">
                      < NotificationsNoneIcon className="icon" />
                      <div className="counter">1</div>
                     
                  </div>
                  <div className="item">
                      < ChatBubbleOutlineIcon className="icon" />
                      <div className="counter">2</div>
                     
                  </div>
                  <div className="item">
                      < ListOutlinedIcon className="icon"  />
                     
                  </div>
                  <div className="item">
                      < img src="https://images.pexels.com/photos/2905719/pexels-photo-2905719.jpeg?cs=srgb&dl=pexels-julian-nielsen-2905719.jpg&fm=jpg"
                      className="avatar" />
                     
                  </div>

              </div>
          </div>
      </div>
     );
}
 
export default Navbar;
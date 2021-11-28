import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Header = () => {
   

    return (
        <div className="header">
        

            <div className="header__left">
               <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
               <div className="header__search">
                   <SearchIcon/>
                   <input type="text" placeholder="Search" />
               </div>
            </div> 
            <div className="header__right">
               <HeaderOption Icon={HomeIcon} title="Home"/> 
               <HeaderOption Icon={SupervisorAccountIcon} title="My network"/> 
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/> 
               <HeaderOption Icon={ChatIcon} title="Messaging"/> 
               <HeaderOption Icon={NotificationsIcon} title="Messaging"/> 
               <HeaderOption avatar={true} title="me"/> 
               



            </div>
        </div>
    )
}

export default Header

import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import InsightsIcon from '@mui/icons-material/Insights';
import ReportIcon from '@mui/icons-material/Report';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import NavigationIcon from '@mui/icons-material/Navigation';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const users = () => {
    navigate("/user");
  }

  return (
    <div className='sidebar' >
      <div className='sidebarWrapper'>
        <div className='sidebarMenu' >
          <h3 className='sidebarTitle' >Dashboard</h3>
          <ul className='sidebarList' >
            <li className='sidebarListItem' >
              <LineStyleIcon className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem' >
              <AnalyticsIcon className='sidebarIcon' />
              Analytics
            </li>
            {/* <li className='sidebarListItem' >
              <TrendingUpIcon className='sidebarIcon' />
              Sales
            </li> */}
          </ul>
        </div>
        <div className='sidebarMenu' >
          <h3 className='sidebarTitle' >Quick Menu</h3>
          <ul className='sidebarList' >
            <li className='sidebarListItem' onClick={users} >
              <PersonIcon className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarListItem' >
              <StoreIcon className='sidebarIcon' />
              Products
            </li>
            <li className='sidebarListItem' >
              <AttachMoneyIcon className='sidebarIcon' />
              transection
            </li>
            <li className='sidebarListItem' >
              <LeaderboardIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu' >
          <h3 className='sidebarTitle' >Notification</h3>
          <ul className='sidebarList' >
            <li className='sidebarListItem' >
              <MailOutlineIcon className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem' >
              <FeedbackIcon className='sidebarIcon' />
              Feddback
            </li>
            <li className='sidebarListItem' >
              <MessageIcon className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu' >
          <h3 className='sidebarTitle' >Staff</h3>
          <ul className='sidebarList' >
            <li className='sidebarListItem' >
              <WorkOutlineIcon className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem' >
              <InsightsIcon className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem' >
              <ReportIcon className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu' >
          <h3 className='sidebarTitle' >Component</h3>
          <ul className='sidebarList' >
            <li className='sidebarListItem' >
              <BorderAllIcon className='sidebarIcon' />
              General
            </li>
            <li className='sidebarListItem' >
              <AlignVerticalCenterIcon className='sidebarIcon' />
              Layout
            </li>
            <li className='sidebarListItem' >
              <NavigationIcon className='sidebarIcon' />
              Navigation
            </li>
            <li className='sidebarListItem' >
              <KeyboardIcon className='sidebarIcon' />
              Data-Entry
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
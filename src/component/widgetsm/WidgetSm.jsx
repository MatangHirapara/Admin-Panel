import React from 'react';
import "./widgetSm.css"
import image_1 from "../images/thumb-2.jpg"
import image_2 from "../images/thumb-4.jpg"
import image_3 from "../images/thumb-8.jpg"
import image_4 from "../images/thumb-9.jpg"
import image_5 from "../images/thumb-15.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';


const WidgetSm = () => {

  const navigate = useNavigate();

  const first = () => {
    navigate("/first");
  }
  const second = () => {
    navigate("/second");
  }
  const third = () => {
    navigate("/third");
  }
  
  return (
    <>
      <div className='widgetsm'  >
        <span className='widgetSmTitle' >
          <h3> New Join Members</h3> 
          <button><MoreHorizIcon/></button>
        </span>
        <ul className='widgetSmList' >
          <li className='widgetSmListItem' >
            <div>
              <img src={image_1} alt="" className='widgetSmImg' />
              <div className='widgetSmUser' >
                <span className='widgetSmUsername' >Terrance Moreno</span>
                <span className='widgetSmUsertitle' >Software Enginear</span>
              </div>
            </div>
            <button  onClick={first} className='widgetSmBtn' >
              <VisibilityIcon className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className='widgetSmListItem'  >
            <div>
              <img src={image_2} alt="" className='widgetSmImg' />
              <div className='widgetSmUser' >
                <span className='widgetSmUsername' >Ron Vargas</span>
                <span className='widgetSmUsertitle' >UI/UX Designer</span>
              </div>
            </div>
            <button className='widgetSmBtn' onClick={second}>
              <VisibilityIcon className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className='widgetSmListItem' >
            <div>
              <img src={image_3} alt="" className='widgetSmImg' />
              <div className='widgetSmUser' >
                <span className='widgetSmUsername' >Luke Cook</span>
                <span className='widgetSmUsertitle' >HR Executive</span>
              </div>
            </div>
            <button className='widgetSmBtn' onClick={third} >
              <VisibilityIcon className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className='widgetSmListItem' >
            <div>
              <img src={image_4} alt="" className='widgetSmImg' />
              <div className='widgetSmUser' >
                <span className='widgetSmUsername' >Anna Kaller</span>
                <span className='widgetSmUsertitle' >Software Enginear</span>
              </div>
            </div>
            <button className='widgetSmBtn'>
              <VisibilityIcon className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className='widgetSmListItem' >
            <div>
              <img src={image_5} alt="" className='widgetSmImg' />
              <div className='widgetSmUser' >
                <span className='widgetSmUsername' >Samantha Phillips</span>
                <span className='widgetSmUsertitle' >Software Enginear</span>
              </div>
            </div>
            <button className='widgetSmBtn'>
              <VisibilityIcon className="widgetSmIcon" /> Display
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default WidgetSm
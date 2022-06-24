import React from 'react';
import "./profile.css"
import image_1 from "../images/thumb-2.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const FirstPro = () => {
  const navigate = useNavigate();
  const close = () => {
    navigate("/");
  }

  return (
      <div className='firstPro' >
        <div style={{display: "flex"}}>
          <div className='img' >
            <img src={image_1} alt="" className='firstImg' />
          </div>
          <div className='close'>
            <button onClick={close} >
                <CloseIcon style={{fontSize: "xx-large"}} />
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className='detail'>
          <label htmlFor="">Name : </label>
          <input type="text" value="Terrance Moreno" />
          <br />
          <label htmlFor="">Email  : </label>
          <input type="text" value="terrancemoreno12@gmail.com" />
          <br />
          <br />
          <label htmlFor="">Description : </label>
          <h5>Hi Nathan,
            <br />
            <br />
            An 'extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.</h5>
          </div>
      </div>
  )
}

export default FirstPro;
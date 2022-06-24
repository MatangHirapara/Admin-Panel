import React from 'react';
import "./widgetLg.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import image_1 from "../images/thumb-1.jpg";
import image_2 from "../images/thumb-2.jpg";
import image_3 from "../images/thumb-4.jpg";
import image_4 from "../images/thumb-8.jpg";
import image_5 from "../images/thumb-15.jpg";
import image_6 from "../images/thumb-5.jpg";
import image_7 from "../images/thumb-6.jpg";
import image_8 from "../images/thumb-7.jpg";
import image_9 from "../images/thumb-9.jpg";
import image_10 from "../images/thumb-10.jpg";

const WidgetLg = () => {

  const button = ({ type }) => {
    return <button className={`widgetLgbtn ${type}`}>{type}</button>
  }

  return (
    <>
      <div className='widgetlg' >
        <span className='widgetLgTitle' >
          <h3>Latest Transactions</h3>
          <button><MoreHorizIcon/></button>
        </span>
        <table className='widgetLgTable' >
            <tr className='widgetLgTr' >
                <th className='widgetLgTh' >Customer</th>
                <th className='widgetLgTh' >Date</th>
                <th className='widgetLgTh' >Amount</th>
                <th className='widgetLgTh' >Status</th>
            </tr>
            
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_1} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Clayton Bates</span>
                </td>
                <td className='widgetLgDate' >6 Feb 2022</td>
                <td className='widgetLgAmount' >$487.00</td>
                <td className='widgetLgStatus' >{button({ type: "Approved" })}</td>
              </tr>
              <tr className='widgetLgTr'>
                <td className='widgetUser' >
                  <img src={image_2} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Terrance Moreno</span>
                </td>
                <td className='widgetLgDate' >16 Jun 2021</td>
                <td className='widgetLgAmount' >$412.00</td>
                <td className='widgetLgStatus' >{button({ type: "Approved" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_3} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Ron Vargas</span>
                </td>
                <td className='widgetLgDate' >8 May 2021</td>
                <td className='widgetLgAmount' >$359.20</td>
                <td className='widgetLgStatus' >{button({ type: "Pending" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_4} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Luke Cook</span>
                </td>
                <td className='widgetLgDate' >14 Apr 2021</td>
                <td className='widgetLgAmount' >$227.00</td>
                <td className='widgetLgStatus' >{button({ type: "Rejected" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_5} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Approved" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_6} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Approved" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_7} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Approved" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_8} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Rejected" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_9} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Pending" })}</td>
              </tr>
              <tr className='widgetLgTr' >
                <td className='widgetUser' >
                  <img src={image_10} alt="" className='widgetLgImg' />
                  <span className='widgetLgName' >Samantha Phillips</span>
                </td>
                <td className='widgetLgDate' >1 Jan 2020</td>
                <td className='widgetLgAmount' >$107.00</td>
                <td className='widgetLgStatus' >{button({ type: "Pending" })}</td>
              </tr>
        </table>
      </div>
    </>
  )
}

export default WidgetLg;
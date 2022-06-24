import React from 'react'
import "./home.css"
import Chart from "../../component/chart/Chart"
import FeatureInfo from '../../component/featuredinfo/FeatureInfo'
import { data } from '../../dummyData'
import WidgetSm from '../../component/widgetsm/WidgetSm'
import WidgetLg from '../../component/widgetlg/WidgetLg'
import FirstPro from '../../component/widgetsm/FirstPro'
import SecondPro from '../../component/widgetsm/SecondPro'
import ThirdPro from '../../component/widgetsm/ThirdPro'
import {Routes, Route} from "react-router-dom"
import Userlist from '../../component/listItem/userlist/Userlist'

const Home = () => {
 
  return (
  <>
    <div className='home' >
        <Routes>
          <Route path='/first' element={<FirstPro/>} />
          <Route path='/second' element={<SecondPro/>} />
          <Route path='/third' element={<ThirdPro/>} />
          <Route path='/user' element={<Userlist/>} />
        </Routes>
      <FeatureInfo />
      <Chart yLine="Yline" userData={data} dataUp="pv" dataDown="uv" dataName="name" title="Unique Visitors" />
        <div className='homwwidgets' >
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  </>
  )
}

export default Home
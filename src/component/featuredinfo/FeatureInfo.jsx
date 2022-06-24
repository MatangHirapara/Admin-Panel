import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./featureinfo.css"

const FeatureInfo = () => {
  return (
    <>
      <div className='featured' >
        <div className='featuresItem' >
          <span className='featuredTitle' >Revanue</span>
          <br />
          <div className='featuredMoneyContainer' >
            <span className='featuredMoney' >$2,145</span>
            <span className='featuredMoneyRate' style={{color: 'red'}} >-11.5 <ArrowDownwardIcon /></span>
          </div>
          <span className='featuredSub' >Compare to last month (2022)</span>
        </div>
        <div className='featuresItem' >
          <span className='featuredTitle' >Sales</span>
          <div className='featuredMoneyContainer' >
            <span className='featuredMoney' >$6,982</span>
            <span className='featuredMoneyRate' >8.2 <ArrowUpwardIcon/></span>
          </div>
          <span className='featuredSub' >Compare to last year (2022)</span>
        </div>
        <div className='featuresItem' >
          <span className='featuredTitle' >Costs</span>
          <div className='featuredMoneyContainer' >
            <span className='featuredMoney' >$8,210</span>
            <span className='featuredMoneyRate' >0.7 <ArrowUpwardIcon /></span>
          </div>
          <span className='featuredSub' >Compare to last year (2022)</span>
        </div>
      </div>
    </>
  )
}

export default FeatureInfo
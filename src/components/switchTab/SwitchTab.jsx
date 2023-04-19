import React, { useState } from 'react'
import './style.scss'
const SwitchTab = ({data,onChangeTab}) => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [left,setLeft]= useState(0)
    const activeTab = (tab,index)=>
    {
         setLeft(index*100)
         setTimeout(()=>
         {
            setSelectedTab(index)
         },300)
         onTabChange(tab,index)
    }
  return (
    <div className='switchingabs'>
       <div className="tabItems">
         {data.map((tab,index)=>
         (
            <span key={index} className={`tabItem`} >{tab}</span>
         ))}
         <span className="movingBg" style={{left}} ></span>
       </div>
    </div>
  )
}

export default SwitchTab

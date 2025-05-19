// import React from 'react'
import './style.scss'

const PageHeader = (props) => {
    const {headertext,icon}=props;
  return (
    <div className='wrapper'>
        <h2>{headertext}</h2>
         <span>{icon}</span>      
    </div>
  )
}

export default PageHeader

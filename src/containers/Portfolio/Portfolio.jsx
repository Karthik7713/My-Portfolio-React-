import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../componenets/PageHeader/PageHeader'

const Portfolio = () => {
  return (
     <section id='portfolio' className='portfolio'>
      <PageHeader
      headertext="My Portfilio"
      icon={<BsInfoCircleFill size={40}/>}
      />

    </section>

  )
}

export default Portfolio

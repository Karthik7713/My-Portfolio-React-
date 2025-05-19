import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../../componenets/PageHeader/PageHeader'

const Resume  = () => {
  return (
       <section id='resume' className='resume'>
      <PageHeader
      headertext="My resume"
      icon={<BsInfoCircleFill size={40}/>}
      />

    </section>

  )
}

export default Resume

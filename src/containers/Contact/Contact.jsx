import React from 'react'
import PageHeader from '../../componenets/PageHeader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div>
      <section id='contact' className='contact'>
      <PageHeader
      headertext=" Contact Me"
      icon={<BsInfoCircleFill size={40}/>}
      />

    </section>
    </div>
  )
}

export default Contact

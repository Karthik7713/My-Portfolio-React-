import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.scss"
import { Animate } from 'react-simple-animate'
import { GiTransform } from 'react-icons/gi'

const Home = () => {
const navigate=useNavigate();
console.log(navigate);
const handlenavigatetocontactmepage =()=>{
  navigate("/contact");

}

  return (
<section id='home' className='home'>
  <div className='home_text_textwpr'>
    <h1>
      Hello, I'm Karthik
      <br/>
      Front end developer
    </h1>
  </div>
<Animate 
play
duration={1.5}
delay={1}
start={{
  transform: 'translateY(550px)'
}
}
end={{
  transform: 'translateX(0px)'

}}
>
    <div className='home_contact-me'>
<button onClick={handlenavigatetocontactmepage}>Hire Me</button>
  </div>
</Animate>
</section>
  )
}

export default Home

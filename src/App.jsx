import { useState } from 'react'
import './App.css'
import { QuestionsAnswers } from './mainmatrix'
import plus from"./assets/images/icon-plus.svg" 
import star from"./assets/images/icon-star.svg" 
import minus from"./assets/images/icon-minus.svg" 

function QandATemplate(props)
{
return(
<div>
  <div className={`main-div ${props.check ? "open" : ""}`}>
    <span>{props.Question}</span>
    <button onClick={props.change} className="btn">
      <img src={props.check?minus:plus} alt="plus" />
    </button>
  </div>
  <div className={`faq-answer-wrapper ${props.check ? "open" : ""}`}>{props.check && <div className='answer'>{props.Answer}</div>}</div>
  <hr />
</div>
)
}
function App() {
  const [openIndex, setOpenIndex] = useState(null);
  
 const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
<main>
 <div className="headline">
  <img src={star} alt="star-icon" />
  <h1>FAQs</h1>
 </div>
 {
  QuestionsAnswers.map((item,index)=>(
   <QandATemplate key={index} Question={item.q}  Answer={item.a} check={openIndex === index} change={()=>handleToggle(index)}>
   </QandATemplate>
  ))
 }
</main>

  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </footer>
    </>
  )
}

export default App

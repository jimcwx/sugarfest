import React,{ useState } from 'react'
import Faq from './Faq';

export default function Faqs(props) {
  const [question, setQuestion] = useState([false,false,false,false,false])

  const toggleAnswer = (index) => {
    setQuestion(prevState => prevState.map((item, idx) => idx === index ? !item : item))
  }

  return props.faqsArray.map((faq, index) => {
    return <Faq faq={faq} key={index} index={index} open={question[index]} toggleAnswer={toggleAnswer}/>
  })
}

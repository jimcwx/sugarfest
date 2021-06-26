import React from 'react'
import classes from './FaqsPage.module.css'
import Faqs from '../Faqs'

const faqsArray = [
  {
    question: 'Stream buffering?',
    answer: `If the stream is buffering, try changing the quality using the settings on the video player. If this does not work, you can head over to our Twitch stream at https://twitch.tv/astateofsugar`
  },
  {
    question: 'What is Sugarfest?',
    answer: 'Sugarfest is an online virtual creatives festival, showcasing artists in the community and anyone else that would like a platform.'
  },
  {
    question: 'How can I take part?',
    answer: `The best way to keep up with what's happening in Sugarfest would be to join our discord at http://discord.gg/Fu3Gs2f`
  },
  {
    question: 'Where can I see the performer list?',
    answer: 'There are 2 places you can check out who is performing; The first would be on the schedule button, located at the top. The other place is the artists page, found here'
  },
  {
    question: 'How is A State of Sugar related to Sugarfest?',
    answer: 'A State of Sugar helps organise, host and run Sugarfest events, so Sugarfest is the name to the franchise.'
  }
]

export default function FaqsPage() {
  return (
    <div className={classes.faqsWrapper} >
      <Faqs faqsArray={faqsArray}/>
    </div>
  )
}

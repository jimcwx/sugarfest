import React from 'react'
import classes from './Faq.module.css'


export default function Faq(props) {
  const processString = require('react-process-string');
  let config = [{
    regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
    fn: (key, result) => <span key={key}>
                             <a target="_blank" href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>{result[2]}.{result[3]}{result[4]}</a>{result[5]}
                         </span>
    }, {
        regex: /(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
        fn: (key, result) => <span key={key}>
                                <a target="_blank" href={`http://${result[1]}.${result[2]}${result[3]}`}>{result[1]}.{result[2]}{result[3]}</a>{result[4]}
                            </span>
  }];

  let stringWithLinks = props.faq.answer;
  let processedString = processString(config)(stringWithLinks);
  
  return (
    <div className={classes.faq}>
      <h3 onClick={() => props.toggleAnswer(props.index)}>{props.faq.question}</h3>
      {props.open ? <p>{processedString}</p> : null}
    </div>
  )
}

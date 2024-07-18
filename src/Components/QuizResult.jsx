import React from 'react'

export default function QuizResult(props) {
  return (
    <div>
Your score:{props.score}<br/>
Total score:{props.totalScore}<br/>
<button className='btn btn-outline-success' onClick={props.tryAgain}>Try,again</button>
    </div>
  )
}

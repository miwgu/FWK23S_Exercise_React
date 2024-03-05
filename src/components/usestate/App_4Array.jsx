import React, { useState } from 'react'

const App_4Array = () => {

    const [questions]= useState(
        [
            {
                id:1,
                num: 'q1',
                text: 'xxxxxxxxx',
            },
            {
                id:2,
                num: 'q2',
                text: 'xxxxxxxxx',
            },
            {
                id:3,
                num: 'q3',
                text: 'xxxxxxxxx',
            },
            {
                id:4,
                num: 'q4',
                text: 'xxxxxxxxx',
            },

            {
                id:5,
                num: 'q5',
                text: 'xxxxxxxxx',
            },  

        ]
    ) 

  return (
    <>
    <div><h1>4.</h1></div>

    <ul>
    { questions.map((question)=>(
        <p key ={question.id}>
            {'fråga'}{question.num}{': '}{question.text}
            
        </p>
    ))}

   </ul>   
 </>

  )
}

export default App_4Array
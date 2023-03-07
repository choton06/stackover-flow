import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './MainHomeBar.css'
import Questionlist from './Questionlist'

const MainHomeBar = () => {
  const location = useLocation()
  const user = 1
  const navigate= useNavigate()

  const questionsList =useSelector (state => state.questionsReducer)
  // console.log(questionsList)
//   var questionlist =[{
//     _id :1,
//     votes:3,
//     upVotes:3,
//     downVotes:1,
//     noOfAnswers:2,
//     questionTitle:"what is a function",
//     questionBody: 'It meant to be',
//     questionTags:["java","nodejs","reactjs","mongodb"],
//     userPosted:"pratik",
//     askedOn:'jan 1',
//     answer:[{
//       answerBody:'Answer',
//       userAnswered: 'hamu',
//       asweredOn:"dec 27",
//       userId: 2
//     }
//     ]
//   },
//   {
//   _id :2,
//   votes:4,
//   upVotes:3,
//   downVotes:1,
//   noOfAnswers:2,
//   questionTitle:"what is a function",
//   questionBody: 'It meant to be',
//   questionTags:["java","nodejs","reactjs","mongodb"],
//   userPosted:"pratik",
//   askedOn:'jan 1',
//   answer:[{
//     answerBody:'Answer',
//     userAnswered: 'dipu',
//     asweredOn:"dec 27",
//     userId: 2
//   }
//   ]
// },
// {
// _id :3,
// votes:10,
// upVotes:3,
//  downVotes:1,
// noOfAnswers:2,
// questionTitle:"what is a function",
// questionBody: 'It meant to be',
// questionTags:["java","nodejs","reactjs","mongodb"],
// userPosted:"pratik",
// askedOn:'jan 1',
// answer:[{
//   answerBody:'Answer',
//   userAnswered: 'damu',
//   asweredOn:"dec 27",
//   userId: 2
// }
// ]
// }
// ]
 const checkAuth=()=>{
  if(user === null){
    alert("login or signup to ask aa question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
 }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname=== '/' ? <h1>Top Questions</h1> : <h1> All questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Qustion</button>
      </div>
      <div>
        {
          questionsList.data === null?
          <p>loding...</p>:
          <>
          <p>{questionsList.data.length} Questions</p>

          <Questionlist questionsList={questionsList.data} />
       
          </>
    }
      </div>

    </div>
  )
}

export default MainHomeBar
import React from 'react'
import './RightSiteBar.css'
import Comment from '../../assests/comment.svg'
import Pen from '../../assests/pen.png'
import Blacklogo from '../../assests/blacklogo.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={Pen} alt="pen" width='18' />
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={Pen} alt="pen" width='18' />
                <p> Podcast 374: How valuable is your screen name?</p>
            </div>

            <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={Comment} alt="pen" width='18' />
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={Comment} alt="pen" width='18' />
                <p> Podcast 374: How valuable is your screen name?</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={Blacklogo} alt="pen" width='18' />
                <p> Podcast 374: How valuable is your screen name?</p>
            </div>
            </div>

            <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
            <div className="right-sidebar-div-2">
                <img src={Pen} alt="pen" width='18' />
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <img src={Pen} alt="pen" width='18' />
                <p> Podcast 374: How valuable is your screen name?</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Widget
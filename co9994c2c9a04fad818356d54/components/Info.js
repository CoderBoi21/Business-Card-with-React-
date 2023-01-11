import React from 'react'

export default function Info(){
    return(
        <div className='ParentInfo'>
            <img className='Image' height='317px' width='317px' src='../Images/Ankur2.jpg'/>
            <p className='AnkurName'>Ankur Sapariya</p>
            <p className='FDev'>Frontend Developer</p>
            <a href='google.com' className='WLink'>ankursapariya.me</a>
            <button className="EMButton"><img src="../Images/Mail.png" />&nbsp;&nbsp;&nbsp;Email</button>
        </div>
    )
}
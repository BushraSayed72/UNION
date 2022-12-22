import React from 'react'
import LoginForm from './LoginForm';

function Main() {
  return (
    <div className='main'>
    <form>
        <label className='label'>Name:</label>

        <div className='inputs'>
        <div className='Name'>
        <input className='input' type='text' placeholder=' First Name'/>
        <p>First Name</p>
        </div>

        <div className='inputs'>
            <div className='Name'>
            <input className='input' type='text' placeholder=' Last Name'/>
            <p>Last Name</p>   
            </div>
        </div>
        </div>

        <div className='phone'>
            <label className='label'> Phone:</label>
            <input className='inputsame' type='number' placeholder='' />
        </div>

        <div className='phone'>
            <label className='label'> Address:</label>
            <input className='inputsame' type='text' placeholder='' />
        </div>
        <LoginForm/>
    </form>
      
    </div>
  )
}

export default Main

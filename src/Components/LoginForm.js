import React, { useEffect, useState } from 'react'
import validation from './Validation';
import '../App.css'


function LoginForm() {
    const [values, setValues] = useState({
        name:'',
        password:''
    })
    const [errors, setError]= useState({})

    function handleChange (e){
        setValues({...values,[e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

      setError(validation(values));
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && (values.name !== '' && values.password!==''))
        {alert("Form Submitted");
    }
    }, [errors])

  return ( 
  <form  onSubmit={handleSubmit}>
    <div className='container'>
    <div className='phone'>
            <label className='label'>User Name </label>
            <input className='inputsame' type='text' placeholder='Enter Name' value={values.name} name='name' onChange={handleChange} />
            {errors.name && <p className='error-pwd' > {errors.name}</p>}
        </div>
        
        <div className='phone'>
            <label className='label'> Password</label>
            <input className='inputsame' type='Password' placeholder='Enter Password' value={values.password} name='password' onChange={handleChange}  />
          {errors.password && <p className='error-pwd'> {errors.password} </p>}
        </div>
        <div className='login'>
         <button className='btn' onClick={handleSubmit}>Login</button>
         <input className='checkbox' type='checkbox' checked="checked"/> <span>Remember me</span>
         </div>
    </div>
    <div className='container-two' >
        <button type='button' className='cancelbtn'>Cancel</button>
        <span className='pswd'>Forget <a href='#'>password?</a></span>
    </div>
    </form>
  )
}

export default LoginForm

import { useState, useEffect } from 'react'
import loader from '../images/loader.svg'

const Login = ({register, handleSubmit, errors, userName, pass}) =>{
    
    const[erorName, setErorName] = useState(true)
    const[erorPass, setErorPass] = useState(true)
    const[load, setLoad] = useState(null)
    const[com, setCom] = useState(0)
    const[use, setUse] = useState(null)
  

    const onSubmit = (data)=>{
        
        console.log(data)

        if(userName !== 'delvia'){
            setErorName(false)
            setErorPass(true)
   
        }
        else if( pass !== 'delvia13'){
            setErorPass(false)
            setErorName(true)
        }

        else{

            setErorName(true)
            setErorPass(true)
            setLoad(true)
            setUse(true)
              
        }
           
    }
    
    // useEffect(()=>{
           
    //     if(load === false){
    //         localStorage.setItem("userName", "delvia")
    //         localStorage.setItem("password", "delvia13")
    //     }
    // },[load])

    useEffect(()=>{
        const interval =setInterval(() => {
               
        if(use){
            if(com < 6){
                setCom(prevState=>prevState+1)
            }
            else{
             setLoad(false)
             localStorage.setItem("userName", "delvia")
             localStorage.setItem("password", "delvia13")
             window.location.reload()
            }
        }
                
        }, 800);

        return () => clearInterval(interval)

    }, [com, use])


    return(

        <div className="form-bg vh-100">
            <div className="container login">
                <div className="row login2">
                    <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                        <div className="form-container">
                            <h3 className="title">My Account</h3>
                            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-icon">
                                    <i className="bi bi-person-circle"></i>
                                </div>
                                <p>{erorName ? null : <i className="bi bi-exclamation-triangle" style={{color:'red'}}> user incorrect</i>}</p>
                                <div className="form-group">
                                    <span className="input-icon"><i className="bi bi-person-fill" style={{color:'black'}}></i></span>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="user name" 
                                        autoComplete='none'
                                        required
                                        {...register('userName',{ pattern: /^[A-Za-z]+$/i })}
                                    
                                    />
                                </div>
                                {errors.userName && <span>caractere non valide</span> }
                                <p>
                                    
                                    {erorPass ? null : <i className="bi bi-exclamation-triangle" style={{color:'red'}}> Mot de passe incorrect</i>}
                                </p>
                                <div className="form-group">
                                    <span className="input-icon"><i className="bi bi-lock-fill" style={{color:'black'}}></i></span>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        autoComplete='none'
                                        required
                                        {...register('password')}
                                    />
                                    <span className="forgot p-3">Forgot Password?</span>
                                </div>
                                {load === true ? (
                                        <>
                                        <img src={loader} alt='loader' width={65} className='mb-4'/><br />
                                        <i>Veuillez patienter ...</i>
                                        </>
                                    ) 
                                    : <></>
                                }
                                <button className="btn signin mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
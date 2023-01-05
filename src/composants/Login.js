import { useState } from 'react'
import article from '../images/article.svg'

const Login = ({register, handleSubmit, errors, userName, pass, setLogin}) =>{
    
    const[erorName, setErorName] = useState(true)
    const[erorPass, setErorPass] = useState(true)

    const onSubmit = (data)=>{
        
        console.log(data)

        if(userName !== 'delvia'){
            setErorName(false)
   
        }
        else if( pass !== 'delvia13'){
            setErorPass(false)
        }

        else{
            setErorName(true)
            setErorPass(true)
            setLogin(false)
        }
 
    }

    return(

        <div className="wrapper">
            <div className="logo">
                <img src={article} alt="article" />
            </div>
            <div className="text-center mt-4 name">
                Dv-Article
            </div>
            <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            <p>{erorName ? null : ('user incorect !')}</p>
                <div className="form-field d-flex align-items-center">
       
                    <input 
                        type="text"  
                        id="userName" 
                        placeholder="Username" 
                        {...register("userName")}  
                        required
                    />
                </div>
                <p>{erorPass ? null : ('Mot de passe incorrect')}</p>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input 
                        type="password" 
                        id="pwd" 
                        placeholder="Password" 
                        autoComplete='none' 
                        {...register("password")}
                        required 

                    />
                </div>
                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                {/* <a href="#">Forget password?</a> or <a href="#">Sign up</a> */}
            </div>
        </div>
    )
}

export default Login
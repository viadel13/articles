import {useState} from 'react'
import Login from "./composants/Login"
import {useForm} from 'react-hook-form'
import Articles from "./composants/Articles"


const App = () =>{

  const{register, handleSubmit, watch, formState: { errors } } = useForm()
  const[login, setLogin] = useState(null)
  const getUserName = localStorage.getItem("userName")
  const getPassword = localStorage.getItem("password")
  const userName = watch("userName")
  const pass = watch("password")

  return(

      <>

        {
          getUserName&&getPassword ?
          
          <Articles />
          :
          
            <Login
              register={register}
              handleSubmit={handleSubmit} 
              errors = {errors} 
              userName={userName}
              pass={pass}
              setLogin={setLogin}
              login={login}
            />
                
   
        }
      </>

 
  )
}

export default App
import {useState} from 'react'
import Login from "./composants/Login"
import {useForm} from 'react-hook-form'
import Articles from "./composants/Articles"


const App = () =>{

  const{register, handleSubmit, watch, formState: { errors } } = useForm()
  const[login, setLogin] = useState(true)
  const userName = watch("userName")
  const pass = watch("password")

  return(
    <div className='container'>
      <div className="row">
        {
          login ? 
            <div className='col-12 md-12'>
              <Login
                register={register}
                handleSubmit={handleSubmit}
                errors = {errors}
                userName={userName}
                pass={pass}
                setLogin={setLogin}
              />
            </div>
            
          : 
          <Articles />
        }
      </div>
    </div>
 
  )
}

export default App
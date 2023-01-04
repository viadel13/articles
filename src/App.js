import {useState, useEffect} from 'react'
import Login from "./composants/Login"

const App = () =>{

  const[userName, setUserName] = useState('');
  const[password, setPassword] = useState('');

  return(
    <div className='container'>
      <div className="row">
        <div className='col-12 md-12'>
          <Login />
        </div>
      </div>
    </div>
 
  )
}

export default App
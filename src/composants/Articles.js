import {useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import UserContext from "./UserContext";
import Accueil from "./Accueil"
import Ecrire from "./Ecrire"

const Articles = () =>{

    const[show, setShow] = useState(null)
    const[comp, setComp] = useState(0)
   
    
    const handleClick = () =>{
        localStorage.clear()
        setShow(true)
    }

    useEffect(()=>{

        const interval =  setInterval(() => {
            
            if(show){
                if(comp > 0){
                    setComp(prevState => prevState - 1)
                }

                else{
                    window.location.reload()
                }
            }
          

        }, 1000);

        return () => clearInterval(interval)
        
    })
  
    
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <UserContext.Provider value={handleClick}>
                        <Accueil />
                    </UserContext.Provider>
                </Route>
                <Route path="/Ecrire">
                    <Ecrire />
                </Route>
            </Switch>
        </>
    )
}

export default Articles;
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom"
import Accueil from "./Accueil"
import Ecrire from "./Ecrire"

const Articles = () =>{
    
    const[compteur ,setCompteur] = useState(0)
    console.log(compteur)
    useEffect(()=>{
    const interval = setInterval(()=>{

        if(compteur < 800){
            setCompteur(prevState=>prevState+1)
        }
        else{
            localStorage.clear()
        }

    }, 1000)

    return () => clearInterval(interval)

    }, [compteur])
    
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route path="/Ecrire">
                    <Ecrire />
                </Route>
            </Switch>
        </>
    )
}

export default Articles;
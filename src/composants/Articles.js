import {useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import { Switch, Route } from "react-router-dom"
import UserContext from "./UserContext";
import Accueil from "./Accueil"
import Ecrire from "./Ecrire"

const Articles = () =>{
    
    const{register, handleSubmit, watch } = useForm()
    const[show, setShow] = useState(null)
    const[comp, setComp] = useState(0)
    const[articles, setArticles] = useState([{titre : 'dfd', auteur : 'kjk'}])
    console.log(articles)
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
        <div className="">
            <Switch>
                <Route exact path="/">
                    <UserContext.Provider value={handleClick}>
                        <Accueil 
                            articles={articles}
                        />
                    </UserContext.Provider>
                </Route>
                <Route path="/Ecrire">
                    <UserContext.Provider value={handleClick}>
                        <Ecrire
                            register={register}
                            handleSubmit={handleSubmit}
                            watch={watch}
                            setArticles={setArticles}
                            articles={articles}
                        />
                    </UserContext.Provider>
                </Route>
            </Switch>
        </div>
    )
}

export default Articles;
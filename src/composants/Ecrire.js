import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import loader2 from '../images/loader2.svg'
import '../css/ecrire.css'


function Ecrire({register, handleSubmit, watch, setArticles, articles}) {

    const[upImage, setUpImage] = useState()
    const[load, setLoad] =useState()
    const[montage, setMontage]=useState()
    const[compteur, setCompteur]=useState(0)
    const titre = watch('titre')
    const auteur = watch('auteur')

    const imageChange = (e) =>{
        if(e.target.files && e.target.files.length > 0){
            setUpImage(e.target.files[0])
        }
    }

 

    const onSubmit = (data)=>{

        setArticles(
            [...articles, {titre : titre, auteur : auteur, image : URL.createObjectURL(upImage)}]
        )
        setMontage(true)
        setCompteur(0)
        
    }
    
    useEffect(()=>{
    
        const interval = setInterval(() => {
            
            if(montage){
                if(compteur < 5){
                    setCompteur(prevState=>prevState+1)
                    setLoad(true)
                }
                else{
                    setLoad(false)
                }
            }
        
        }, 1000);
            
        return () => clearInterval(interval)
    
    },[compteur, load, montage, auteur, titre])

    return (
        <>
            <Navbar />

            <div className='contain'>
                <div className='container-fluid carte'>
                    <div className="page-wrapper font-robo">
                        <div className="wrapper wrapper--w680">
                            <div className="card card-1">
                                
                                <img src='https://images.unsplash.com/photo-1506957833838-96c1e88d394f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d3JpdGUlMjBhcnRpY2xlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='artcl' height={250} className='card-img-top' />
                                
                                <div className="card-body">
                                    <h2 className="title text-center">Articles Info</h2>
                                    <form className="row form g-3" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-12 col-md-12 mb-4">
                                            <div className='inp'>
                                                <input 
                                                    className='mb-2 input' 
                                                    type="text" 
                                                    placeholder='AUTEUR'
                                                    {...register('auteur')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mb-4">
                                            <div className='inp'>
                                                <input 
                                                    className='mb-2 input' 
                                                    type="text" 
                                                    placeholder='TITRE'
                                                    {...register('titre')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mb-4">
                                            <label className='mb-2'>choisir une image</label>
                                            <input type="file" 
                                                className="form-control"
                                                onChange={imageChange}
                                                accept="image/png, image/jpeg"
                                            />    
                                        </div>
                                        <div className='col-12 col-md-12'>
                                            <div className="mb-3">
                                                <label className="form-label">Rediger l'article...</label>
                                                <textarea 
                                                    className="form-control" 
                                                    rows="3"
                                                    {...register('textArticle')}    
                                                    required
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary">Poster</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                
                    load ?(
                        <div className='load d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={loader2} alt='' />
                                <p style={{color:'white'}} className='text-center'>Article en cours de creation</p>
                                <p style={{color:'white'}} className='text-center'>Veuillez patienter</p>
                            </div>
                        </div>
                    )
                    : <></>
                
                }
             
            </div>

      
            
         
            

           
        </>
    )
}

export default Ecrire

// import { useEffect, useState } from "react";
import Header from "./Header"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function Accueil({articles}) {
 
  return (
    <>
      <Navbar/>
      <Header />
      <section className="py-5">
        <div className="container">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              articles.map((i)=>{
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                            
                      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                      <div className="card-body p-4">
                        <div className="text-center">       
                          <h5 className="fw-bolder">{i.titre}</h5>
                          {i.auteur}
                        </div>
                      </div>           
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="/lire">Lire article</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
             
              })
            }  
          </div>
        </div>
      </section>

    </>
  )
}

export default Accueil

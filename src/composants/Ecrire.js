import React from 'react'
import Navbar from './Navbar'
import '../css/ecrire.css'
import articl from '../images/articl.jpg'

function Ecrire() {
    return (
        <>
            <Navbar />

            <div className='container-fluid carte'>
                <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
                    <div className="wrapper wrapper--w680">
                        <div className="card card-1">
                            
                            <img src={articl} alt='artcl' height={250} className='card-img-top' />
                            
                            <div className="card-body">
                                <h2 className="title text-center">Registration Info</h2>
                                <form className="row g-3">
                                    <div className="col-12 col-md-12 mb-4">
                                        <div className='inp'>
                                            <input className='mb-2' type="text" id="validationCustom01" placeholder='AUTEUR'/>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <div className='inp'>
                                            <input className='mb-2' type="date" id="validationCustom01" placeholder='j'/>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <div className='inp'>
                                            <input className='mb-2' type="date" id="validationCustom01" placeholder='j'/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ecrire

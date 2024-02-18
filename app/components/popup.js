'use client'
import { useState } from "react";


export default function Popup({ movies }) {
    const [showModal, setShowModal] = useState(false);
    const imgsrc = 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + movies.poster_path;

    return (
        <div>
            <button onClick={() => setShowModal(true)}><i className="fa fa-eye" aria-hidden="true"></i></button>
            {showModal &&
                <div className="block absolute inset-0 bg-gray-900 bg-opacity-50" style={{ width: 100 + '%', height: 100 + 'vw', 'max-height': 1030 + 'px' }}>
                    <div className="inline-block relative bg-white rounded-3xl pb-3" style={{ margin: 'auto', width: 50 + 'vw', 'min-height' : 560 + 'px', top:10 + 'vw' }}>
                        <button className="absolute -right-0 mt-2 mr-3" onClick={() => setShowModal(false)}><i className="fa fa-times text-xl" aria-hidden="true"></i></button>
                        <div className="mt-3">
                            <h1 className="pb-3">{movies.title}</h1>
                            <div className="inline-block whitespace-nowrap align-top pl-2" style={{ width: 50 + '%'}}><img src={imgsrc} /></div>
                            <div className="inline-block whitespace-normal align-top" style={{ width: 50 + '%' }}>
                                
                                <div className="text-left pl-2 pr-2">
                                    <h3>Overview</h3>
                                    <div className="text-base pb-3">{movies.overview}</div>
                                    <div>Release Date : {movies.release_date}</div>
                                    <div>Popularity : {movies.popularity}</div>
                                    <div>Ratings : {movies.vote_average}</div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            }
        </div>
    )
}

import React from 'react'
import "./HomeData.scss"
import { Link, useParams } from "react-router-dom";
import {data} from "../../data"
import { useInfoContext } from '../../context/Context';
import { useEffect } from 'react';
import { logDOM } from '@testing-library/react';

const HomeData = () => {
    const id = useParams().id;
    const res = data.filter((res) => res.id == id)[0];
    const {cards} = useInfoContext()


    return (
        <div className='homedata'>
            <div className="container">
                <div className="row">
                    <div className="box">
                        <h2 className='h2'>Премиум объявления</h2>
                        <div className="row">
                                {cards.length > 0 ? cards.map(card => {
                                    console.log(cards);
                                    return  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                        <Link to={`/oneinfo/${card._id}`} className="card">
                                            {console.log(card?.photos[0].url)}
                                            <img className='image' src={card?.photos.length > 0 && card?.photos[0].url} alt="img" />
                                            <div className="page">
                                                <div className="boz">
                                                    <h5 className='info'> {card?.name}</h5>
                                                    <i class="fa-regular fa-heart"></i>
                                                </div>
                                                <p className='prise'>{card?.price}</p>
                                                <br />
                                                <span className='city'>{card?.location}</span>
                                                <br />
                                                <span className='data'>{card?.year}</span>
                                            </div>
                                        </Link >
                                    </div>
                                }) : <h2>Tavar yo'q</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeData

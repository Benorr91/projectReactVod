import axios from 'axios';
import React, { useEffect, useState } from 'react';


import { useNavigate, useParams } from 'react-router-dom';

function Single(props) {
    const params = useParams();
    const [item, setItem] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        console.log(params.searchbyCat);
        doApi();
    }, [params.id])
    const doApi = async () => {
        const url = `https://www.omdbapi.com/?i=${params.id}&apikey=813ad757`
        const resp = await axios.get(url)
        setItem(resp.data)
        console.log(resp.data);

    }


    return (

        <div className='container'>
            {item.Title ?
                <div>
                    {/* <h1 className='text-center'>{item.Title}</h1> */}
                    <div className="card mx-auto" style={{ width: "24rem" }}>
                        <img src={item.Poster != "N/A" ? item.Poster : "https://cdn.pixabay.com/photo/2013/05/07/08/46/paper-109277__340.jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="badge bg-danger float-end">{item.Type}</div>
                            <h5 className="card-title">{item.Title}</h5>
                            <p className="card-text">Publishing: {item.Year}</p>
                            <p className="card-text"> Summary: {item.Plot}</p>
                            <p className="card-text">Movie time: {item.Runtime}</p>
                            <p className="card-text">Actors: {item.Actors}</p>
                            <p className="card-text">Ratings: {item.Ratings[0].Value}
                                {[...Array(Math.floor(item.imdbRating))].map((star) => {
                                    return (
                                        <span className="star">&#9733;</span>
                                    );
                                })}
                            </p>
                            <div className="box flex">

                            </div>

                            <button className='btn btn-dark' onClick={() => navigate(-1)}>go back</button>

                        </div>
                    </div>
                </div>
                : <><div className="container mx-auto text-center"><img className='text-center' src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif" alt="loading" /></div></>}
        </div>
    )
}

export default Single
import axios from 'axios';
import React, { useEffect, useRef, useState }
    from 'react';
    import { AiFillStar } from "react-icons/ai";
import { Link, useNavigate, useParams } from 'react-router-dom';

function Single(props) {
    let params = useParams();
    let [item, setItem] = useState({})
    let searchQ = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        console.log(params.searchbyCat);
        doApi();
    }, [params.id])
    const doApi = async () => {
        let url = `https://www.omdbapi.com/?i=${params.id}&apikey=813ad757`
        let resp = await axios.get(url)
         setItem(resp.data)
         console.log(resp.data);
   
    }
    return (

        <div className='container'>
            {item.Poster ?
                <div>
                    <Link to="/">Home</Link>
                    <h1 className='text-center'>{item.Title}</h1>
                    <div className="card mx-auto" style={{width: "24rem"}}>
                        <img src={item.Poster} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <div className="badge bg-danger float-end">{item.Type}</div>
                                <h5 className="card-title">{item.Title}</h5>
                                <p className="card-text">Publishing: {item.Year}</p>
                                <p className="card-text"> Summary: {item.Plot}</p>
                                <p className="card-text">Movie time: {item.Runtime}</p>
                                <p className="card-text">Actors: {item.Actors}</p>
                                <p className="card-text">Ratings: {item.Ratings[0].Value} <AiFillStar/></p>
                                <Link to="/">Home</Link>
                                
                               
                            </div>
                    </div>
                </div>
                : <><div className="container mx-auto text-center"><img className='text-center' src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif" alt="loading" /></div></>}
        </div>
    )
}

export default Single
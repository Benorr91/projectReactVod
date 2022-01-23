import axios from 'axios';
import React, { useEffect, useRef, useState }
    from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//  import {AppCont} from './context/appCont';

function Home(props) {
    let params = useParams();
    let searchQ = useRef();
    let navigate = useNavigate();
    console.log(params.searchbyYear);
    console.log(params.searchbyCat);

    let [ar, setAr] = useState([])

    useEffect(() => {
        doApi();
    }, [params.searchbyCat, params.searchbyYear])
    const doApi = async () => {
        let url = `https://www.omdbapi.com/?i=tt3896198&apikey=813ad757&s=${params.searchbyCat ? params.searchbyCat : "bank"}&y=${params.searchbyYear ? params.searchbyYear : ""}`
        let resp = await axios.get(url)
        setAr(resp.data.Search);
        console.log(params.searchbyYear);
        console.log(resp.data.Search);
    }
    let onBtnClick = () => {
        navigate("/search/" + searchQ.current.value);
    }
    let onBtnClick2 = (e) => {
        navigate("/gallery/" + e.target.innerHTML);

    }
    let onBtnClick3 = (e) => {
        // navigate("/gallery/" + e.target.innerHTML);
        navigate("/single/" + e.target.value);
        console.log(searchQ.current.value);
        console.log(e.target.value);

    }
    let yearsAr = [];

    for (let i = 2000; i <= 2022; i++) {
        yearsAr.push(i);
    }
    console.log(yearsAr);



    return (
        <div className='container' >
            <h1>Gallery</h1>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className=' mx-2' to="/">Home</Link>
                    <div className="d-flex ">
                        <input ref={searchQ} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={onBtnClick}>Search</button>
                    </div>

                </div>
                <div className='mt-3'>
                    {yearsAr.map((item, i) => {
                        return (
                            <button key={i} className="badge bg-primary text-wrap mx-1 text-light" onClick={onBtnClick2}> {item}</button>
                        )
                    })}
                </div>

            </nav>
            <div className="row p-3">
                {ar.map((item, i) => {
                    return (
                        <div key={i} className="card shadow p-3 m-3" style={{ width: " 18rem" }}>
                            <img src={item.Poster == "N/A" ? "https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png" : item.Poster} className="card-img-top" alt={item.Title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.Title}</h5>
                
                                <button value={item.imdbID} onClick={onBtnClick3} className="btn btn-primary" >Go somewhere</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
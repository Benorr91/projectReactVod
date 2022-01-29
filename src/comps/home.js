import axios from 'axios';
import React, { useEffect, useRef, useState }
    from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Home(props) {
    let re = new RegExp(/ab+c/, 'i')
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
        try {
            let resp = await axios.get(url)
            setAr(resp.data.Search);
            console.log(params.searchbyYear);
            console.log(resp.data.Search);
        } catch (error) {
            alert("No Data With This name")
            navigate("/")

            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

        }


    }
    const onBtnClickSearch = () => {
        const value = re.exec(searchQ.current.value)
        console.log(value);
        navigate("/search/" + searchQ.current.value);
        searchQ.current.value = "";
    }
    const onBtnClickYear = (e) => {
        navigate("/year/" + e.target.innerHTML);

    }
    const onBtnClickInfo = (e) => {
        navigate("/video/" + e.target.value);
        console.log(searchQ.current.value);
        console.log(e.target.value);

    }
    const years = [1991, 1978, 2015, 2020, 1948, 1999, 2015];
    years.sort();

    // const yearsAr = [];
    // for (let i = 2000; i <= 2021; i++) {
    //     yearsAr.push(i);
    // }

    return (
        <div className='container' >
            <h1 className='h1Home my-3 display-3 fw-bold'>Vod Movies</h1>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid ">
                    <div className="d-flex ">
                        <input ref={searchQ} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" onClick={onBtnClickSearch}>Search</button>
                    </div>

                </div>
                <div className='mt-3'>
                    {years.map((item, i) => {
                        return (
                            <button key={i} className="badge bg-primary text-wrap mx-1 text-light" onClick={onBtnClickYear}> {item}</button>

                        )
                    })}
                </div>

            </nav>


            {ar ?
                <div className="row p-3">
                    {ar.map((item, i) => {
                        return (

                            <div key={i} className="card shadow p-3 m-3" style={{ width: " 18rem" }}>
                                <img src={item.Poster == "N/A" ? "https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png" : item.Poster} className="card-img-top" alt={item.Title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.Title}</h5>

                                    <button value={item.imdbID} onClick={onBtnClickInfo} className="btn btn-primary" >More Info</button>
                                </div>
                            </div>
                        )
                    })}
                </div> : <strong>"Sorry we couldn't find any matches for this value"</strong>}
        </div>
    )
}

export default Home
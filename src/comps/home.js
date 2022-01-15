import axios from 'axios';
import React, { useEffect, useState }
    from 'react';
import { useParams } from 'react-router-dom';
//  import {AppCont} from './context/appCont';

function Home(props) {
    let params = useParams();
    console.log(params.search);

    let [ar, setAr] = useState([])

    useEffect(() => {
        doApi();
    }, [params.search])
    const doApi = async () => {
        let url = `https://www.omdbapi.com/?i=tt3896198&apikey=813ad757&s=bank&y=${params.search}`
        let resp = await axios.get(url)
        setAr(resp.data.Search);
        console.log(params.search);
        console.log(resp.data.Search);
    }


    return (
        <div className='container' >
            <h1>Gallery</h1>
            <div className="row p-3">
            {ar.map((item, i) => {
                return (
                  
                    <div className="card shadow p-3 m-3" style={{width:" 18rem"}}>
                      <img src={item.Poster=="N/A" ?"https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png":item.Poster} className="card-img-top" alt={item.Title}/>
                      <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Home
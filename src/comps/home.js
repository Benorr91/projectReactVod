import axios from 'axios';
import React, {  useEffect, useState }
 from 'react';
import { useParams } from 'react-router-dom';
//  import {AppCont} from './context/appCont';

function Home(props){
 let params=useParams();
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
 
    
    return(
       <div className='container' >
           <h1>Gallery</h1>
           {ar.map((item,i)=>{
               return(
                 
                         <img style={{hight:"20px"}} className=' p-3 ' key={i}  src={item.Poster} alt={item.Title} />

              
               )
              
           })}

       </div>
    )
}

export default Home
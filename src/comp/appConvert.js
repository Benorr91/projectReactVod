import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Input from './input';
import Select from './select';
import SelectConvert from './selectConvert';
// import { FaBeer } from 'react-icons/fa';

function AppConvert(props){
    let [coinsOpts,setCoinsOpt]=useState([])
    let [coinsVal,setCoinsVal]=useState([])
    let [coinVal,setCoinVal]=useState(1)
    let [coinChangeVal,setChangeVal]=useState(1)
    let [amount,setAmount]=useState(1);
    let [convert,setConvert]=useState(1);   
    let date=new Date();   
    const onChangeInput=(input)=>{
       setCoinVal(input)  
    }     
    useEffect(()=>{
        doApi();
    },[])
    const doApi=async ()=>{
        let url="https://apilayer.net/api/live?access_key=3c81786f9b3d2e267f40d08af97b97f2&currencies=usd,ils,eur,btc,thb"
        let resp= await axios.get(url)
        setCoinsOpt(Object.keys(resp.data.quotes));    
        setCoinsVal(resp.data.quotes)
    }
    return(
        <div className='container '>
          <h1 className='text-center'>Convert Currency</h1>
        
          <div className='col-md-6 mx-auto text-center '>From</div>
          <Select coinsVal={coinsVal} coinVal={onChangeInput} coinsOpts={coinsOpts} setAmount={setAmount} amount={amount}/>  

          <div className='col-md-6 mx-auto text-center'>To </div>        
          <SelectConvert coinsVal={coinsVal} coinChangeVal={coinChangeVal} setChangeVal={setChangeVal} />
          <Input coinsVal={coinsVal} coinVal={coinVal}  setAmount={setAmount}  amount={amount} coinsOpt={coinsOpts} coinChangeVal={coinChangeVal} setConvert={setConvert} convert={convert}/>
   
          <h2 className='text-center text-light'> Your Convert   {convert}</h2>
                 
          <div className='col-md-6 mx-auto text-center'> <small className='text-center text-light'>{amount}$ </small></div> 
          <div className='col-md-6 mx-auto text-center'>=</div>
          <div className='col-md-6 mx-auto text-center text-light '><strong>{date.toString()}</strong></div>
        
        </div> 
    )
}

export default AppConvert
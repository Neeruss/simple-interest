import './App.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
function App() {
  const [Interest , setInterest]=useState(0)
  const [Principle , setPrinciple]=useState(0)
  const [Rate , setRate]=useState(0)
  const [Year , setYear]=useState(0)
  const [isPrinciple, setIsPrinciple]=useState(0)
  const [isRate, setIsRate]=useState(0)
  const [isYear, setIsYear]=useState(0)


  const validate=(e)=>{
    const {name,value}=e.target
    /*console.log(name ,value);*/
    /*console.log(typeof(value));*/
    /*console.log(value.match(/^[0-9]+$/));*/
    if(!!value.match(/^[0-9]*.?[0-9]+$/))//!!-to convert into boolean value
    {
      if(name==="principle")
      {
      setPrinciple(value)
      setIsPrinciple(true)
      }
      else if(name==="rate")
      {
        setRate(value)
        setIsRate(true)
      }
      else if(name==="year")
      {
        setYear(value)
        setIsYear(true)
      }
    }
    else
    {
      if(name==="principle")
      {
        setIsPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name==="rate")
      {
        setRate(value)
        setIsRate(false)
      }
      else if(name==="year")
      {
        setYear(value)
        setIsYear(false)
      }
    }

  
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!Principle || !Rate || !Year)
    {
      alert('please fill the form')
    }
    else
    {
     /* alert('submitted')*/
     setInterest(Principle*Rate*Year/100)
    }
  }
  const handleReset=(e)=>{
    setInterest(0)
    setIsPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center w-100 bg-dark">
      <div className='bg-white p-5 rounded w-500px'>
      <h1>Simple Interest App</h1>
      <p>Calculate Your Simple Interest Easily</p>
      <div style={{height:'150px'}} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
        <h1>₹{' '}{Interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      <form className='mt-5' onSubmit={handleCalculate}>
        <div className='mb-3'>
         <TextField name="principle" value={Principle || ""} onChange={(e)=>validate(e)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
        </div>
        {!isPrinciple &&
          <div><p className='text-danger'>Invalid Input</p></div>
        }
        <div className='mb-3'>
         <TextField name='rate' value={Rate || ""} onChange={(e)=>validate(e)} className='w-100' id="outlined-basic" label="Rate Of Interest (p.a) %" variant="outlined" />
        </div>
        {!isRate &&
          <div><p className='text-danger'>Invalid Input</p></div>
        }
        <div className='mb-3'>
         <TextField name='year' value={Year || ""} onChange={(e)=>validate(e)} className='w-100' id="outlined-basic" label="Year (Yr)" variant="outlined" />
        </div>
        {!isYear &&
          <div><p className='text-danger'>Invalid Input</p></div>
        }
        <div className='mb-3'>
        <Stack direction="row" spacing={2}>
        <Button type='submit' disabled={isPrinciple && isRate && isYear?false:true} className='bg-success' style={{width:'200px',height:'50px'}} variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{width:'200px',height:'50px'}} variant="outlined">Reset</Button>
        </Stack>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;

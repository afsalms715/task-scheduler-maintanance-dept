import React,{useState,useEffect} from 'react'
import Datatable from './Datatable'

type propModel={
    employees:any;
}

const WorkReport:React.FC<propModel> = ({employees}) => {
    const[formData,setFormData]=useState({})
    const handleChnages=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const reportRun=()=>{
        console.log(formData)
    }
  return (
    <div className='h-[100vh] w-[90%]'>
        <div className='m-2'>
            <div className='flex flex-wrap'>
                <div className='mx-1'>
                    <label className='text-sm block'>From date</label>
                    <input name='fromDate' onChange={(e)=>handleChnages(e)} type='date' className='border w-60 p-1 text-sm rounded-md'/>
                </div>
                <div className='ml-1'>
                    <label className='text-sm block'>To date</label>
                    <input name='toDate' onChange={(e)=>handleChnages(e)} type='date' className='border w-60 p-1 text-sm rounded-md'/>
                </div>
                <div className='ml-1'>
                    <label className='text-sm block'>Employee</label>
                    <select name='employee' onChange={(e)=>handleChnages(e)} className='border w-60 p-[5px] text-sm rounded-md'>
                        <option value="">select</option>
                        {employees.map((item:any)=>{
                            return <option>{item.name}</option>
                        })}
                    </select>    
                </div>
                <div className='ml-1'>
                    <label className='text-sm block'>Location</label>
                    <select name='location' onChange={(e)=>handleChnages(e)} className='border w-60 p-[5px] text-sm rounded-md'>
                        <option value="">All</option>
                        <option>Grand Mall</option>
                        <option>Ezdan</option>
                        <option>Plaza 2</option>
                        <option>Plaza 3</option>
                        <option>Shahaniya</option>
                        <option>Barwa</option>
                        <option>Aziziya</option>
                        <option>Umm Garn</option>
                    </select>    
                </div>
                <div className='ml-2'>
                    <button className='border mt-5 p-1 text-sm shadow-md rounded-md px-2 bg-slate-200' onClick={reportRun}>search</button>  
                </div>
            </div>
        </div>
        {<Datatable/>}
    </div>
  )
}

export default WorkReport
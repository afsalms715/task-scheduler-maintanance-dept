'use client'
import React,{useState,useEffect} from 'react'
import Datatable from './Datatable'
import NormalTable from './NormalTable';

type propModel={
    employees:any;
}

const WorkReport:React.FC<propModel> = ({employees}) => {
    const[formData,setFormData]=useState({fromDate:0,toDate:0,employeeId:0,location:0})
    const[reportData,setReportData]=useState([])
    const[dtStatus,setDtStatus]=useState(false)//to set the datatable is already declare or not
    const[dtState,setDtState]=useState();//to keep the datatable object

    const handleChnages=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const reportRun= async()=>{
        if(formData.fromDate!=0 && formData.toDate!=0){
            //console.log(`http://192.168.51.252/MNTC_SCHEDULER_API/api/WorkScheduler/MNTC_work_report?Empid=${formData.employeeId}&FromDate=${formData.fromDate}&Location=${formData.location}&ToDate=${formData.toDate}`)
            await fetch(`http://192.168.51.252/MNTC_SCHEDULER_API/api/WorkScheduler/MNTC_work_report?Empid=${formData.employeeId}&FromDate=${formData.fromDate}&Location=${formData.location}&ToDate=${formData.toDate}`)
            .then((responce:any)=>responce.json()).then((data)=>{
                console.log(data)
                setReportData(data)
            })
        }else{
            alert("Date missing!")
        }
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
                    <select name='employeeId' onChange={(e)=>handleChnages(e)} className='border w-60 p-[5px] text-sm rounded-md'>
                        <option value="0">select</option>
                        {employees.map((item:any,index:number)=>{
                            return <option key={index} value={item.id}>{item.name}</option>
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
        {/*<Datatable reportData={reportData} dtStatus={dtStatus} setDtStatus={setDtStatus} setDtState={setDtState} dtState={dtState}/>*/}
        <NormalTable reportData={reportData} dtStatus={dtStatus} setDtStatus={setDtStatus} setDtState={setDtState} dtState={dtState}/>
    </div>
  )
}

export default WorkReport
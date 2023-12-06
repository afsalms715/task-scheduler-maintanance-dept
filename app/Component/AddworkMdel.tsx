import { fork } from 'child_process';
import React,{useState,useEffect} from 'react'

type propModel={
    modelShow:boolean;
    setModelShow:any;
    name:string;
    desig:string;
};

const AddworkMdel:React.FC<propModel> = (props) => {
    const {modelShow,setModelShow,name,desig}=props
    const[formData,setFormData]=useState({name:name,desig:desig,endTime:"",startTime:"",workTime:""})
    const handleChanges=(e:any)=>{
        //console.log(e.target.name)
        //console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    //calculate work time
    useEffect(()=>{
        let startTimeob:any=new Date(`2000-01-01T${formData.startTime}`);
        let endTimeob:any=new Date(`2000-01-01T${formData.endTime}`);
        let differenceInMillis =endTimeob-startTimeob;
        const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInMillis % (1000 * 60 * 60)) / (1000 * 60));
        setFormData({...formData,workTime:`${hours} H:${minutes} M`})
    },[formData.endTime,formData.startTime])

    const saveWork=()=>{
        console.log(formData)
    }
  return (
    <div className='fixed inset-0 z-10 flex  col justify-center items-center backdrop-blur-sm'>
        <div className='w-[800px] h-[400px] border rounded-md bg-white shadow-lg'>
            <div className='bg-gray-200 border flex justify-between'>
                <p className='pl-4 pt-2 pb-2'>Assign work</p>
                <button className='mt-2 mr-3 h-7 w-7 rounded-full bg-red-400' onClick={()=>setModelShow(false)}>X</button>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='m-1'>
                    <p className='text-sm'>Name</p>
                    <input name="name" className='border border-gray-300 p-1 rounded-md' value={name} type='text'  readOnly placeholder='name'/>
                </div>
                <div className='m-1'>
                    <p className='text-sm'>Designation</p>
                    <input name="desig" className='border border-gray-300 p-1 rounded-md' value={desig} type='text' readOnly placeholder='designation'/>
                </div>
                <div className='m-1 w-[230px] h-[34px]'>
                    <p className='text-sm'>Work Location</p>
                    <select name="workLocation" className='border border-gray-300 p-1 rounded-md w-full'  placeholder='designation' onChange={(e)=>handleChanges(e)}>
                        <option value="">select</option>
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
                <div className='m-1 w-[230px] h-[34px]'>
                    <p className='text-sm'>Start Time</p>
                    <input name="startTime" className='border border-gray-300 p-1 rounded-md w-full' type='time' placeholder='' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-[230px] h-[34px]'>
                    <p className='text-sm'>End Time</p>
                    <input name="endTime" className='border border-gray-300 p-1 rounded-md w-full' type='time' placeholder='' onChange={(e)=>handleChanges(e)} />
                </div>
                <div className='m-1'>
                    <p className='text-sm'>Work Time</p>
                    <input name="workTime" value={formData.workTime} className='border border-gray-300 p-1 rounded-md' readOnly type='text' placeholder='' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-full px-10'>
                    <p className='text-sm'>Work Details</p>
                    <textarea name="workDetails"  className='border border-gray-300 p-1 rounded-md w-full h-[100px]'  placeholder='work details' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-full px-10'>                 
                    <button onClick={()=>{saveWork();setModelShow(false)}} className='border border-gray-300 p-1 w-full bg-blue-300 rounded-md'>SAVE</button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default AddworkMdel
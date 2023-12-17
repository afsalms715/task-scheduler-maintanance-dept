'use client'
import React,{useState,useEffect} from 'react'

type propModel={
    modelShow:boolean;
    setModelShow:any;
    name:string;
    desig:string;
    id:number;
    setTempDB:any;
    tempDB:any;
    workDetl:string;
    startTime:string;
    endTime:string;
    workLocation:string;
    isUpdate:boolean;
    workId:number;
    workDate:string;
};

const AddworkMdel:React.FC<propModel> = (props) => {
    const {modelShow,setModelShow,name,desig,id,setTempDB,tempDB,workDetl,startTime,endTime,workLocation,isUpdate,workId,workDate}=props
    const[formData,setFormData]=useState({workId:workId,id,name:name,desig:desig,endTime:endTime,startTime:startTime,workTime:"",workDetails:workDetl,workLocation,Id:0})
    
    //values save when changes happen
    const handleChanges=(e:any)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    //form validation 
    const formValidation=()=>{
        let flag=false;
        if(formData.startTime=="" || formData.endTime=="" || formData.workDetails=="" || formData.workLocation==""){
            flag=false
            alert("you missing to input some data fields please check !")
        }else{
            flag=true
        }
        return flag
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
        if(formValidation()){
            formData.workId=tempDB.length+1
            formData.Id=formData.id
            setTempDB([...tempDB,formData])
            console.log(tempDB)
            var requestOptions:any = {
                method: 'POST',
                redirect: 'follow'
              };
              
              fetch(`http://192.168.51.252/MNTC_SCHEDULER_API/api/WorkScheduler/MNTC_add_work?workDate=${workDate}&JsonData=${JSON.stringify(formData)}`, requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));             
        }
    }

    const updateWork=()=>{
        if(formValidation()){
            tempDB.map((work:any)=>{
                if(formData.workId==work.workId){
                    work.workDetails=formData.workDetails
                    work.endTime=formData.endTime 
                    work.startTime=formData.startTime
                    work.workLocation=formData.workLocation
                    work.workTime=formData.workTime
                }
            })
            console.log(formData)
            formData.Id=formData.id
            var requestOptions:any = {
                method: 'POST',
                redirect: 'follow'
              };
              
              fetch(`http://192.168.51.252/MNTC_SCHEDULER_API/api/WorkScheduler/MNTC_update_work?JsonData=${JSON.stringify(formData)}`, requestOptions)
                .then(response => console.log(response))
                
        }
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
                    <select name="workLocation" value={formData.workLocation} className='border border-gray-300 p-1 rounded-md w-full'  placeholder='designation' onChange={(e)=>handleChanges(e)}>
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
                    <input name="startTime" value={formData.startTime} className='border border-gray-300 p-1 rounded-md w-full' type='time' placeholder='' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-[230px] h-[34px]'>
                    <p className='text-sm'>End Time</p>
                    <input name="endTime" value={formData.endTime} className='border border-gray-300 p-1 rounded-md w-full' type='time' placeholder='' onChange={(e)=>handleChanges(e)} />
                </div>
                <div className='m-1'>
                    <p className='text-sm'>Work Time</p>
                    <input name="workTime" value={formData.workTime} className='border border-gray-300 p-1 rounded-md' readOnly type='text' placeholder='' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-full px-10'>
                    <p className='text-sm'>Work Details</p>
                    <textarea name="workDetails" value={formData.workDetails} className='border border-gray-300 p-1 rounded-md w-full h-[100px]'  placeholder='work details' onChange={(e)=>handleChanges(e)}/>
                </div>
                <div className='m-1 w-full px-10'>                 
                    {isUpdate?
                        <button onClick={()=>{updateWork();setModelShow(false)}} className='border border-gray-300 p-1 w-full bg-red-300 rounded-md'>UPDATE</button>:
                        <button onClick={()=>{saveWork();setModelShow(false)}} className='border border-gray-300 p-1 w-full bg-blue-300 rounded-md'>SAVE</button>
                    }
                </div>
            </div>
        </div>  
    </div>
  )
}

export default AddworkMdel
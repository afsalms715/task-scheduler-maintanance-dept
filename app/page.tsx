'use client'
import Image from 'next/image'
import AddworkMdel from './Component/AddworkMdel'
import { useEffect, useState } from 'react'

export default function Home() {
  const[employees,setEmployees]=useState([
    { "id": 1, "name": "Sakthivel Rangarajan", "designation": "Ac Technician" },
  ]);
  /*{ "id": 2, "name": "Sanoj Puthenpurayil", "designation": "Ac Technician" },
    { "id": 3, "name": "Keerthan Yerumbu", "designation": "Ac Technician" },
    { "id": 4, "name": "Gurusamy Murugesan", "designation": "Ac Technician" },
    { "id": 5, "name": "Muhammed Mufeed Thalappil", "designation": "Ac Technician Trainee" },
    { "id": 6, "name": "Fawas Rahman Parasuraman Kunnath", "designation": "Ac Technician Trainee" },
    { "id": 7, "name": "Manikandan Vailissery Parambil", "designation": "Carpenter" },
    { "id": 8, "name": "Baiju Thuruthiyil Thazhe Kuniyil", "designation": "Carpenter" },
    { "id": 9, "name": "Shamsudheen Ali", "designation": "Carpenter Helper" },
    { "id": 10, "name": "Ajnas Chukkan Amsa", "designation": "Chiller&Freezer Technician" },
    { "id": 11, "name": "Suresh Kumar Elanthiraiyan", "designation": "Electrician" },
    { "id": 12, "name": "Sivaprakasam Muniyan", "designation": "Electrician" },
    { "id": 13, "name": "Mohamed Aslam Mohamed Farooq", "designation": "Electrician Cum Plumber" },
    { "id": 14, "name": "Mohammad Shiyas Azheekkal Nalakath", "designation": "Helper Maintanace" },
    { "id": 15, "name": "Mohammed Athuif", "designation": "Maintenance Helper" },
    { "id": 16, "name": "Prince Anto Aruldhas", "designation": "Mason" },
    { "id": 17, "name": "Pravin Kumar John", "designation": "Mason Block/Tile" },
    { "id": 18, "name": "Shardin Chanayil Joseph", "designation": "Painter" },
    { "id": 19, "name": "Ajith J S", "designation": "Painter" },
    { "id": 20, "name": "Rajesh Vylipatt", "designation": "Tile Worker" },
    { "id": 21, "name": "Rahmathulla Vadakke Arayantakathe", "designation": "Tile Worker" }*/
  const[modelShow,setModelShow]=useState(false)
  const[empName,setEmpName]=useState("")
  const[empDesig,setEmpDesig]=useState("")
  const[empId,setEmpId]=useState(0)
  const[workDetl,setWorkDetl]=useState("")
  const[startTime,setStartTime]=useState("")
  const[endTime,setEndTime]=useState("")
  const[workLocation,setWorkLocation]=useState("")
  const[isUpdate,setIsUpdate]=useState(false)
  const[workId,setWorkId]=useState(0)
  const[workDate,setWorkDate]=useState('')
  const[tempDB,setTempDB]=useState([{Id:0,workDetails:"",workLocation:"",startTime:"",endTime:"",workTime:""}])
  let props={Id:empId,modelShow,setModelShow,name:empName,desig:empDesig,startTime,endTime,workDetl,workLocation,isUpdate,workId,setTempDB,tempDB,}

  //employee data fetching from api
  const employeeFetch=async ()=>{
    const responce=await fetch('https://localhost:44376/api/WorkScheduler/MNTC_employees');
    const data=await responce.json()
    console.log(data)
    setEmployees(data)
  }
  useEffect(()=>{
    employeeFetch();
  },[])

  //set system date as default date
  useEffect(()=>{
    const dateObj=new Date()
    let date=dateObj.getDate()
    let month=dateObj.getMonth()
    let year=dateObj.getFullYear()
    let strDate=`${date}`
    let strMonth=`${month}`
    if(date<10){
      strDate=`0${date}`
    }
    if(month<10){
      strMonth=`0${strMonth}`
    }
    const sysdate=`${year}-${strMonth}-${strDate}`
    setWorkDate(sysdate)
  },[])

  const showModel=({Name,Desig,Id}:any)=>{
    setEmpId(Id)
    setEmpName(Name)
    setEmpDesig(Desig)
    setWorkDetl("")
    setStartTime("")
    setEndTime("")
    setWorkLocation("")
    setIsUpdate(false)
    setModelShow(true)
  }
  
  //show model for updation
  const showUpdateModel=(work:any)=>{
    console.log(work)
    setEmpId(work.Id)
    setEmpName(work.name)
    setEmpDesig(work.desig)
    setWorkDetl(work.workDetails)
    setStartTime(work.startTime)
    setEndTime(work.endTime)
    setWorkLocation(work.workLocation)
    setWorkId(work.workId)
    setIsUpdate(true)
    setModelShow(true)
  }

  //save to db
  const saveToDb=()=>{
    console.log(tempDB)
  }

  return (
    <div className='mt-10'>
      <div className='m-20'>
        <div className=''>
          <p>Work Date</p>
          <input type='date' value={workDate} onChange={(e:any)=>setWorkDate(e.target.value)} className='border w-60 p-1 rounded-md'/>
        </div>
        <table className='mt-5 border w-full'>
          <thead className='border'>
            <tr className='border'>
              <th>Id</th>
              <th className='border'>Name</th>
              <th className='border'>Designation</th>
              <th className='border'>
                <div>Works</div>
                  <table className='w-full'>
                        <thead>
                          <tr>
                              <th className='border w-[20%]'>Work Detail</th>
                              <th className='border w-[20%]'>Location</th>
                              <th className='border w-[20%]'>Start Time</th>
                              <th className='border w-[20%]'>End Time</th>
                              <th className='border w-[20%]'>Work Time</th>
                          </tr>
                        </thead>
                  </table>
              </th>
              <th><button className='border bg-green-300 rounded-md p-1 text-xs m-1' onClick={()=>saveToDb()}>SAVE CHANGES</button></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item,index)=>{
              return(
                <tr className='border' key={index}>
                  <td>{item.id}</td>
                  <td className='border'>{item.name}</td>
                  <td className='border'>{item.designation}</td>
                  <td className='w-[65%]'>
                    <table className='w-full'>
                      <tbody>
                      {
                        tempDB.map((work,index)=>{
                          if(work.Id==item.id){
                            if(work.workDetails!=""){
                              return(
                                <tr className='border border-green-300 bg-slate-100 mb-[2px]' onClick={()=>showUpdateModel(work)} key={index}>
                                  <td className='border border-red-300 mr-1 w-[20%] '>{work.workDetails}</td>
                                  <td className='border  border-red-300 mr-1 w-[20%]'>{work.workLocation}</td>
                                  <td className='border  border-red-300 mr-1 w-[20%]'>{work.startTime}</td>
                                  <td className='border  border-red-300 mr-1 w-[20%]'>{work.endTime}</td>
                                  <td className='border  border-red-300 mr-1 w-[20%]'>{work.workTime}</td>
                                </tr>
                              )
                            }
                          }
                        })
                      
                      }
                      </tbody>
                    </table>
                  </td>
                  <td className='border p-1'>
                    <button onClick={()=>{
                        showModel({Id:item.id,Name:item.name,Desig:item.designation})
                      }} className='ml-1 p-1 border border-[2px] border-gray-200 hover:bg-slate-200 rounded-md'>Add Work</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {modelShow &&
      <AddworkMdel {...props}/>}
    </div>
  )
}

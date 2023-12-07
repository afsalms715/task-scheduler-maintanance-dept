'use client'
import Image from 'next/image'
import AddworkMdel from './Component/AddworkMdel'
import { useEffect, useState } from 'react'

export default function Home() {
  let employees=[
    { "Id": 1, "Name": "Sakthivel Rangarajan", "Designation": "Ac Technician" },
    { "Id": 2, "Name": "Sanoj Puthenpurayil", "Designation": "Ac Technician" },
    { "Id": 3, "Name": "Keerthan Yerumbu", "Designation": "Ac Technician" },
    { "Id": 4, "Name": "Gurusamy Murugesan", "Designation": "Ac Technician" },
    { "Id": 5, "Name": "Muhammed Mufeed Thalappil", "Designation": "Ac Technician Trainee" },
    { "Id": 6, "Name": "Fawas Rahman Parasuraman Kunnath", "Designation": "Ac Technician Trainee" },
    { "Id": 7, "Name": "Manikandan Vailissery Parambil", "Designation": "Carpenter" },
    { "Id": 8, "Name": "Baiju Thuruthiyil Thazhe Kuniyil", "Designation": "Carpenter" },
    { "Id": 9, "Name": "Shamsudheen Ali", "Designation": "Carpenter Helper" },
    { "Id": 10, "Name": "Ajnas Chukkan Amsa", "Designation": "Chiller&Freezer Technician" },
    { "Id": 11, "Name": "Suresh Kumar Elanthiraiyan", "Designation": "Electrician" },
    { "Id": 12, "Name": "Sivaprakasam Muniyan", "Designation": "Electrician" },
    { "Id": 13, "Name": "Mohamed Aslam Mohamed Farooq", "Designation": "Electrician Cum Plumber" },
    { "Id": 14, "Name": "Mohammad Shiyas Azheekkal Nalakath", "Designation": "Helper Maintanace" },
    { "Id": 15, "Name": "Mohammed Athuif", "Designation": "Maintenance Helper" },
    { "Id": 16, "Name": "Prince Anto Aruldhas", "Designation": "Mason" },
    { "Id": 17, "Name": "Pravin Kumar John", "Designation": "Mason Block/Tile" },
    { "Id": 18, "Name": "Shardin Chanayil Joseph", "Designation": "Painter" },
    { "Id": 19, "Name": "Ajith J S", "Designation": "Painter" },
    { "Id": 20, "Name": "Rajesh Vylipatt", "Designation": "Tile Worker" },
    { "Id": 21, "Name": "Rahmathulla Vadakke Arayantakathe", "Designation": "Tile Worker" }
  ];
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
            {employees.map((item)=>{
              return(
                <tr className='border'>
                  <td>{item.Id}</td>
                  <td className='border'>{item.Name}</td>
                  <td className='border'>{item.Designation}</td>
                  <td className='w-[65%]'>
                    <table className='w-full'>
                      <tbody>
                      {
                        tempDB.map((work)=>{
                          if(work.Id==item.Id){
                            if(work.workDetails!=""){
                              return(
                                <tr className='border border-green-300 bg-slate-100 mb-[2px]' onClick={()=>showUpdateModel(work)}>
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
                        showModel({Id:item.Id,Name:item.Name,Desig:item.Designation})
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

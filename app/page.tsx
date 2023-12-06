'use client'
import Image from 'next/image'
import AddworkMdel from './Component/AddworkMdel'
import { useState } from 'react'

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
  const[tempDB,setTempDB]=useState([{Id:0,workDetails:"",workLocation:"",startTime:"",endTime:"",workTime:""}])
  let props={Id:empId,modelShow,setModelShow,name:empName,desig:empDesig,setTempDB,tempDB}
  const showModel=({Name,Desig,Id}:any)=>{
    setEmpId(Id)
    setEmpName(Name)
    setEmpDesig(Desig)
    setModelShow(true)
  }
  return (
    <div className='mt-10'>
      <div className='m-20'>
        <div className=''>
          <p>Work Date</p>
          <input type='date' className='border w-60 p-1 rounded-md'/>
        </div>
        <table className='mt-5 border w-full'>
          <thead className='border'>
            <tr className='border'>
              <th>Id</th>
              <th className='border'>Name</th>
              <th className='border'>Designation</th>
              <th className='border'>Works</th>
              <th></th>
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
                    <ul>
                      {
                        tempDB.map((work)=>{
                          if(work.Id==item.Id){
                            if(work.workDetails!=""){
                              return(
                                <li className='border border-green-300 bg-slate-100 mb-[2px] flex'>
                                  <p className='border border-red-300 mr-1 '>Work Detial : {work.workDetails}</p>
                                  <p className='border  border-red-300 mr-1'>Location : {work.workLocation}</p>
                                  <p className='border  border-red-300 mr-1'>Start Time : {work.startTime}</p>
                                  <p className='border  border-red-300 mr-1'>End Time : {work.endTime}</p>
                                  <p className='border  border-red-300 mr-1'>Work Time : {work.workTime}</p>
                                </li>
                              )
                            }
                          }
                        })
                      
                      }
                    </ul>
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

'use client'
import Image from 'next/image'
import AddworkMdel from './Component/AddworkMdel'
import { useState } from 'react'

export default function Home() {
  let employees=[
    { "Name": "Sakthivel Rangarajan", "Designation": "Ac Technician" },
    { "Name": "Sanoj Puthenpurayil", "Designation": "Ac Technician" },
    { "Name": "Keerthan Yerumbu", "Designation": "Ac Technician" },
    { "Name": "Gurusamy Murugesan", "Designation": "Ac Technician" },
    { "Name": "Muhammed Mufeed Thalappil", "Designation": "Ac Technician Trainee" },
    { "Name": "Fawas Rahman Parasuraman Kunnath", "Designation": "Ac Technician Trainee" },
    { "Name": "Manikandan Vailissery Parambil", "Designation": "Carpenter" },
    { "Name": "Baiju Thuruthiyil Thazhe Kuniyil", "Designation": "Carpenter" },
    { "Name": "Shamsudheen Ali", "Designation": "Carpenter Helper" },
    { "Name": "Ajnas Chukkan Amsa", "Designation": "Chiller&Freezer Technician" },
    { "Name": "Suresh Kumar Elanthiraiyan", "Designation": "Electrician" },
    { "Name": "Sivaprakasam Muniyan", "Designation": "Electrician" },
    { "Name": "Mohamed Aslam Mohamed Farooq", "Designation": "Electrician Cum Plumber" },
    { "Name": "Mohammad Shiyas Azheekkal Nalakath", "Designation": "Helper Maintanace" },
    { "Name": "Mohammed Athuif", "Designation": "Maintenance Helper" },
    { "Name": "Prince Anto Aruldhas", "Designation": "Mason" },
    { "Name": "Pravin Kumar John", "Designation": "Mason Block/Tile" },
    { "Name": "Shardin Chanayil Joseph", "Designation": "Painter" },
    { "Name": "Ajith J S", "Designation": "Painter" },
    { "Name": "Rajesh Vylipatt", "Designation": "Tile Worker" },
    { "Name": "Rahmathulla Vadakke Arayantakathe", "Designation": "Tile Worker" }
];
  const[modelShow,setModelShow]=useState(false)
  const[empName,setEmpName]=useState("")
  const[empDesig,setEmpDesig]=useState("")
  let props={modelShow,setModelShow,name:empName,desig:empDesig}
  const showModel=({Name,Desig}:any)=>{
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
            {employees.map((item,index)=>{
              return(
                <tr className='border'>
                  <td>{index+1}</td>
                  <td className='border'>{item.Name}</td>
                  <td className='border'>{item.Designation}</td>
                  <td className='w-[65%]'></td>
                  <td className='border p-1'>
                    <button onClick={()=>{
                        showModel({Name:item.Name,Desig:item.Designation})
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

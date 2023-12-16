import React from 'react'

type propModel={
    activeBtn:string;
    setActiveBtn:any;
}

const MenuBar:React.FC<propModel> = (props) => {
    const{activeBtn,setActiveBtn}=props
    const handleClick=(e:any)=>{
        setActiveBtn(e.target.name)
    }
  return (
    <div className='border-r border-slate-300-400 w-[10%] bg-slate-100'>
        <ul className='fixed w-[9.7%]'>
          <li className=' border '>
            <button name='workScheduler' onClick={(e)=>handleClick(e)} className={`p-1 mt-1 w-full ${activeBtn=='workScheduler'?'bg-white shadow-md':''} text-sm text-gray-600 hover:bg-white active:text-black `}>work scheduler</button>
          </li>
          <li className=' border '>
            <button name='workReport' onClick={(e)=>handleClick(e)} className={`p-1 mt-1 w-full ${activeBtn=='workReport'?'bg-white shadow-md':''} text-sm text-gray-600 hover:bg-white active:text-black`}>work report</button>
          </li>
        </ul>
    </div>
  )
}

export default MenuBar
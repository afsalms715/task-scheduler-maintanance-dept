import React from 'react'
type propModel={
    reportData:any;
    dtStatus:boolean;
    setDtStatus:any;
    dtState:any;
    setDtState:any;
}

const NormalTable:React.FC<propModel> = ({reportData,dtStatus,setDtStatus,dtState,setDtState}) => {
  return (
    <div className='mt-4 m-1 w-full'>
        <table className='w-full border'>
            <thead className='w-full'>
                <tr>
                    <th className='border'>Emp ID</th>
                    <th className='border'>Employee Name</th>
                    <th className='border'>Designation</th>
                    <th className='border'>Work Date</th>
                    <th className='border'>Work ID</th>
                    <th className='border'>Start Time</th>
                    <th className='border'>End Time</th>
                    <th className='border'>Work Time</th>
                    <th className='border'>Work Location</th>
                    <th className='border'>Work Details</th>
                </tr>
            </thead>
            <tbody>
                {reportData.map((item:any)=>{
                    return(
                        <tr className='border'>
                            <td className='border p-1'>{item.id}</td>
                            <td className='border p-1'>{item.name}</td>
                            <td className='border p-1'>{item.desig}</td>
                            <td className='border p-1'>{item.workDate}</td>
                            <td className='border p-1'>{item.workId}</td>
                            <td className='border p-1'>{item.startTime}</td>
                            <td className='border p-1'>{item.endTime}</td>
                            <td className='border p-1'>{item.workTime}</td>
                            <td className='border p-1'>{item.workLocation}</td>
                            <td className='border p-1'>{item.workDetails}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default NormalTable
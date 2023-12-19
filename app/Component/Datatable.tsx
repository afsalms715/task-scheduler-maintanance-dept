'use client'
import React,{useEffect, useRef,useState} from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-buttons'
import '../css/buttonStyle.css'
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"

type propModel={
    reportData:any;
    dtStatus:boolean;
    setDtStatus:any;
    dtState:any;
    setDtState:any;
}

const Datatable:React.FC<propModel> = ({reportData,dtStatus,setDtStatus,dtState,setDtState}) => {
    const tableRef:any=useRef('table')
    let table:any=dtState
    const DTinitialization=(reportData:any)=>{ 
            table = new DataTable(tableRef.current, {
                dom: 'Bfrtip',
                processing: true,
                data:reportData,
                columns: [
                    { title: 'Emp Id', data: 'id' },
                    { title: 'Employee Name', data: 'name' },           
                    { title: 'Designation', data: 'desig' },
                    { title: 'Work Date', data: 'workDate' },
                    { title: 'Work Id', data: 'workId' },
                    { title: 'Start Time', data: 'startTime' },           
                    { title: 'End Time', data: 'endTime' },
                    { title: 'Work Time', data: 'workTime' },
                    { title: 'Work Location', data: 'workLocation' },
                    { title: 'Work Details', data: 'workDetails' }
                ],
                buttons: [
                    'copy','csv','print'
                ],
        }
        );
        setDtState(table)
    }
    
    useEffect(()=>{
        if(!table && !dtStatus){
            DTinitialization(reportData)
            setDtStatus(true);
        }else{
            table.clear();
            table.rows.add(reportData);
            table.draw();
        }
    },[reportData])

  return (
    <div className='mt-4 m-1 w-full'>
        <table className='w-full border' ref={tableRef}>
            <thead className='w-full'>
                <tr>
                    <th>Emp ID</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Work Date</th>
                    <th>Work ID</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Work Time</th>
                    <th>Work Location</th>
                    <th>Work Details</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Datatable
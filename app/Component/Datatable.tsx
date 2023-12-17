import React,{useEffect, useRef} from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-buttons'
import * as $ from 'jquery';
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

const Datatable = () => {
    const tableRef:any=useRef('table')
    let table:any;
    useEffect(()=>{
        if(!table){
            table = new DataTable(tableRef.current, {
                dom: 'Bfrtip',
                processing: true,
                data:[],
                buttons: [
                    'copy','csv','print'
                ],
        });}
        table.clear();
        table.rows.add([]);
        table.draw();
    },[])
    
  return (
    <div className='mt-4 m-1 w-full'>
        <table className='w-full border' ref={tableRef}>
            <thead>
                <tr>
                    <th>date</th>
                    <th>Employee</th>
                    <th>Work</th>
                    <th>date</th>
                    <th>Employee</th>
                    <th>Work</th>
                    <th>date</th>
                    <th>Employee</th>
                    <th>Work</th>
                    <th>date</th>
                    <th>Employee</th>
                    <th>Work</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Datatable
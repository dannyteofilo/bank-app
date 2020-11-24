import React, { useState } from 'react'
import { EmployeeForm } from './EmployeeForm';


export const ModalAdd = () => {

    const [open, setOpen] = useState(false);

    const handleclose = () => {
        setOpen(false);
        document.getElementById("myCheck").click();
    }

    return (
        <div className='container'>
            <button type="button" onClick={() => setOpen(true)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add
            </button>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
                            <button id='myCheck' type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setOpen(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                open &&
                                <EmployeeForm close={handleclose}></EmployeeForm>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

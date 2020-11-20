import React from 'react'
import {EmployeeForm} from './EmployeeForm';

export const ModalAdd = () => {
    return (
        <div className='container'>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <EmployeeForm></EmployeeForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

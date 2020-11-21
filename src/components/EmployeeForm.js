import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployee, resetForm } from '../actions/addEmployee';


export const EmployeeForm = () => {
    let options = [];
    const dispatch = useDispatch();

    const state = useSelector(state => state)

    const { data } = state.branchs;
    const { name: name_error, middle_name: middle_name_error, last_name: last_name_error, branch: branch_error, id } = state.addEmployee;

    console.log(name_error, middle_name_error, last_name_error, branch_error);

    if (data) {
        options = data.results ? [...data.results] : [];
    }

    console.log('options: ', options);

    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        middle_name: '',
        last_name: '',
        branch: 1,
    });

    const { name, middle_name, last_name, branch } = formValues;

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(resetForm());
        dispatch(fetchEmployee({ ...formValues }))
    }

    const handleSelect = (e) => {
        handleInputChange(e);
    }
    return (
        <div className='container'>
            <form onSubmit={handleAdd}>
                <div className="form-group">
                    <select className="form-control" name='branch' value={branch} id="exampleFormControlSelect1" onChange={handleSelect}>

                        {
                            options.map((item) => (<option key={item.id} value={item.id}>{item.name}</option>))
                        }
                    </select>
                    {
                        (branch_error && !id) &&
                        <span className='error'>{branch_error[0]}</span>
                    }
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        className='form-control'
                        autoComplete='off'
                        value={name}
                        onChange={handleInputChange}
                    />
                    {
                        (name_error && !id) &&
                        <span className='error'>{name_error[0]}</span>
                    }
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Middle Name'
                        name='middle_name'
                        className='form-control'
                        autoComplete='off'
                        value={middle_name}
                        onChange={handleInputChange}
                    />
                    {
                        (middle_name_error && !id) &&
                        <span className='error'>{middle_name_error[0]}</span>
                    }
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        className='form-control'
                        autoComplete='off'
                        value={last_name}
                        onChange={handleInputChange}
                    />
                    {
                        (last_name_error && !id) &&
                        <span className='error'>{last_name_error[0]}</span>
                    }
                    {
                        (id) &&
                        <div className='success'>
                            <span>Post sucessfully</span>
                        </div>
                    }
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mb-2'>Submit</button>
                </div>

            </form>
        </div>
    )
}

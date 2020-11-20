import React from 'react'
import {useForm} from '../hooks/useForm';

export const EmployeForm = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        middle_name: '',
        last_name: '',
        branch: '',
    });

    const { name ,middle_name ,last_name ,branch } = formValues;

    const handleAdd = (e) => {
        e.preventDefault();
        console.log('submit form');

    }
    return (
        <div className='container'>
            <form onSubmit={handleAdd}>

            <div className='form-group'>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                </div>
                <div className='form-group'>
                <input
                    type='text'
                    placeholder='Middle Name'
                    name='middle_name'
                    autoComplete='off'
                    value={middle_name}
                    onChange={handleInputChange}
                />
                </div>
                <div className='form-group'>
                <input
                    type='text'
                    placeholder='Last Name'
                    name='last_name'
                    autoComplete='off'
                    value={last_name}
                    onChange={handleInputChange}
                />
                </div>
                <div className='form-group'>
                <input
                    type='text'
                    placeholder='Branch'
                    name='branch'
                    autoComplete='off'
                    value={branch}
                    onChange={handleInputChange}
                />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary mb-2'>Submit</button>
                </div>
            </form>
        </div>
    )
}

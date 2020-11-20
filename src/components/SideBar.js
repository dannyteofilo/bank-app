import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ItemSideBar } from './ItemSideBar'
import { fetch } from '../actions/banks';


export const SideBar = () => {

    const state = useSelector(state => state.banks)
    const { data } = state;
    let banks=[];
    if(data){
         banks = data.results ? [...data.results] : [];
    }

    const handleEmployees = (e) => {
        console.log('employee: ', e);
    }
    return (
        <div className='sideBar__container'>
            <div className='main'>
                <div className='title'>
                    <h2>Bank App</h2>
                </div>
            </div>
            <div className='items'>
                {
                    banks.map((item) => (
                        <ItemSideBar key={item.id} item={item} click={(e) => handleEmployees()} />
                    ))
                }
            </div>
        </div>
    )
}

import React, { useContext } from 'react'
import { DateContext } from '../../context/DateContext';
import { FilterContext } from '../../context/FilterContext';

import styles from './Filter.module.scss'

export default function Filter(props){
    const {filter, onChangeFilter} = useContext(FilterContext)
    const {date, setDate} = useContext(DateContext)

    const namesList = props.names.results.map(name => {
        return (
            <option key={name.list_name_encoded} value={name.list_name_encoded}>
                {name.list_name}
            </option>
        )
    })
    
    const preventSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.filterContainer}>
     
                <form onSubmit={preventSubmit}>

            Category<select name="" id="" onChange={onChangeFilter} value={filter}>
                        {namesList}
                    </select>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  name="" id=""/>
                </form>
        </div>
    );
}

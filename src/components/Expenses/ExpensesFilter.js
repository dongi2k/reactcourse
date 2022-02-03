import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value)

    }

    const filterOptions = [2018, 2019, 2020, 2021, 2022, 2023]


    return (
        <div className={'expenses-filter'}>
            <div className={'expenses-filter__control'}>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    {/*{for(let i = 2019; i < 2023; i++){*/}
                    {/*    return*/}
                    {/*    <option value={i}>{i}</option>*/}
                    {/*}}*/}

                    {filterOptions.map(option =>
                        <option value={option} key={option}>{option}</option>
                    )}
                    {/*<option value={'2022'}>2022</option>*/}
                    {/*<option value={'2021'}>2021</option>*/}
                    {/*<option value={'2020'}>2020</option>*/}
                    {/*<option value={'2019'}>2019</option>*/}
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter
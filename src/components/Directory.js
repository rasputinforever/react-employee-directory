// We need to call in a random assortment of employees from the API
// We need to have a DEFAULT sort (by last name)
// We need a toggler for sorting by AT LEAST one other attribute of the employees

// https://randomuser.me/ is the API to use here

// Display the directory as a... 
    // table?
    // Grid of cards?
    // Both???

// Use some style, maybe Material UI?

// start
import React, { useState, useEffect } from 'react';

// API
import API from '../util/API.js'

function Directory() {

    const [data, setData] = useState([])
    const [sort, setSort] = useState('alphabetical')

    const [filter, setFilter] = useState('')

    useEffect(() => {
        API.search()
        .then((res) => {
            let dataArr = []
            res.data.results.forEach(res => {
                dataArr.push({
                    data: res,
                    filter: false
                })
            })
            setData(dataArr)
        })
      },[]);
    
    function sortEmployees(sort) {
        // will take two arguments, sort alphabetical or revAlphabetical
        // take the data state and re-order it
        // useState
    }

    function filterEmployees(sort) {
        // take in some filter
        // 
    }

    return (
        <>
            {
                data.map((emp) => {
                    console.log(emp.data.name.first)
                    return <p>{emp.data.name.first}</p>
                })
            }
        </>
    )
    
}

export default Directory
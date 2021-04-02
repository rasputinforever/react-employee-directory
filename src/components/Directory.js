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

// components
import Employee from './Employee.js'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,  
    },
    gridList: {
      width: 500,
      height: 500,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

function Directory() {

    const classes = useStyles();

    const [data, setData] = useState([])
    // will be used soon
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
            console.log(dataArr[0].data.picture.medium)
            setData(dataArr)
        })
      },[]);

    const Employees = data.map((emp, i) => {
            return <Employee key={i} name={emp.data.name.first} image={emp.data.picture.medium}/>
            })
    
    
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
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Employee Directory</ListSubheader>
                    </GridListTile>

                    {Employees}

                </GridList>
            </div>
        </>
    )
    
}

export default Directory
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
import Nav from './Nav.js'
import Employee from './Employee.js'

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Directory() {

    const classes = useStyles();

    const [data, setData] = useState([])

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
            console.log(dataArr[0].data)
            setData(dataArr)
        })
      },[]);

      const Employees = data.map((emp, i) => {
            
        return <Employee key={i} title={emp.data.name.title} nameF={emp.data.name.first} nameL={emp.data.name.last} image={emp.data.picture.large} city={emp.data.location.city} country={emp.data.location.country} email={emp.data.email} phone={emp.data.cell}/>
        })
        
      function handleInputs(event){
        switch(event.name) {
            case "sort":
                sortEmployees(event.value)
                break;
            case "location":
                filterEmployees(event.value)
                break;
            default:
                break;
            }
      }

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
        <Nav onUpdate={handleInputs} />
            <div className={classes.root}>
      <Grid container spacing={3}>

        {Employees}

      </Grid>
    </div>
        </>
    )
    
}

export default Directory
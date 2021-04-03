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

            dataArr.sort((a, b) => a.data.name.last.localeCompare(b.data.name.last))
            setData(dataArr)
            
        })
      },[]);

    const Employees = data.map((emp, i) => {
        if (!emp.filter) {
            return <Employee key={i} title={emp.data.name.title} nameF={emp.data.name.first} nameL={emp.data.name.last} image={emp.data.picture.large} city={emp.data.location.city} country={emp.data.location.country} email={emp.data.email} phone={emp.data.cell}/>
        }

        return <></>
    })
        
      function handleInputs(event){
        switch(event.name) {
            case "sort":
                sortEmployees(event.value)
                break;
            case "location":
                filterEmployees(event.value)
                break;
            case "country":
                sortCountry(event.value)
                break;
            default:
                break;
            }
      }

    function sortEmployees(sort) {
        
        let newData = [...data];

        if (sort === 'alph') {
            newData.sort((a, b) => a.data.name.last.localeCompare(b.data.name.last))
        } else {
            newData.reverse()      
        }

        setData(newData)
    }

    function sortCountry(sort) {
        
        let newData = [...data];

        if (sort === 'coun') {
            newData.sort((a, b) => a.data.location.country.localeCompare(b.data.location.country))
        } else {
            newData.reverse()      
        }

        setData(newData)
    }

    function filterEmployees(filter) {
        
        let newData = [...data]
        if (filter === "all") {filter = "usint"}
        let usFilter = filter.indexOf("us") > -1
        let intFilter = filter.indexOf("int") > -1
        
        newData.forEach(item => {

            if (item.data.location.country === "United States") {
                item.filter = !usFilter
            } else {
                item.filter = !intFilter
            }
        })

        setData(newData)
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
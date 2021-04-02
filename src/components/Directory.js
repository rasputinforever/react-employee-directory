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

    useEffect(() => {
        console.log("Hello")
        API.search()
        .then((res) => {
            setData(res.data.results)
        })

      },[]);


    return (
        <>
            {
                data.map((employee, i) => {
                    return <p key={i}>{employee.name.first}</p>
                })
            }
        </>
    )
    
}

// class Directory extends React.Component {

//     constructor(props) {
//         super(props);
    
//         this.state = {
//             data: [],
//             fetching: true
//         }
//       }

//     componentDidMount() {
//         API.search()
//         .then(res => {
//             this.setState({
//                 data: res.data.results,
//                 fetching: false
//               });
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.data.map((employee) => {
//                     return <p>{employee.name.first}</p>
//                 })}
//             </div>
//         )
//     }
// }

export default Directory
# Employee Directory

[Deployed on GitHub Pages!](https://rasputinforever.github.io/react-employee-directory/)

## Introduction
Employee Directory is a React-based, front-end application that demonstrates how states and hooks allow for clean organization of a dataset. For this application demonstration data is randomly generated from a 3rd party API and a set of simple radio selectors are given to the user to sort and filter the rendered components.

## How to Use

### Deployed
To observe the working application follow the link above to the deployed site. Observe how the filters work appropriately given the random data set.

### Clone
Clone the repository onto your local PC. This application can be injected into a full-stack application whose database contains the employee directory. In the Directory component file replace the API call with a call to your local routes. Otherwise, simply run `npm i` then `npm start` to run the application as-is locally.

## How it Works

### React
React is a front-end library that delivers a virtual DOM that is fast to load and, thanks to state-based interactions, keeps any source dataset in sync with the user's inputs.

#### Functional JSX
Instead of Classes, this tool uses functions to create JSX elements. In doing so, in order to utlize **states** and **asychronous events** we use hooks that take in the user-inputs and any 3rd party/routed datasets.

#### Hooks
* useState: this hook allows the functional jsx to have states. Defining an array containing the state name and state-specific setter function, hooking useState establishes the initial state and delivers the ability to associate the state to that element and have a quick means by which to update that state.

* useEffect: this hook allows asychronous API calls to occur and render into the element. When this page loads it calls an API within the useEffect hook. Once complete, useEffect updates the element's state using that state's specific updator function. This all occurs as the API call is returned and as such, effectively, handles the asychronous act of making an API call in the first place.

#### States
* Data: the data called from the API is stored as a state as an array of objects containing both the "employee data" and "filter" boolean (see below). The array is sorted by last name in the use-effect for an initial sort, but the user then can sort it however else they need. The array is rendered in order of how it exists in that data array.

* Sort: Sort state is stored in the Nav component and sent up to the parent Directory component's data state updator. 

* Filter: As sort, this state is kept in the Nav component and sent up to the Directory component's filter updator. Filter state is also applied onto the data state's content. When data is rendered as Employee elements it checks the "filter" key. This is how sort is accomplished and the data is still kept for when it is unfiltered.

### 3rd Party API

[Random User API](https://randomuser.me/) is used for this application to randomly display a set of 60 unique people from all over the world. By having a wide variety of types of people the filters and sorts can be better demonstrated.

### Credits

Erik Portillo, 2021
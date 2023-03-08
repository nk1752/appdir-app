'use client'

import { useState, useEffect } from 'react'

function Data() {
    const [data, setData] = useState('**')

    async function GetStatus() {

        fetch('http://localhost:8082/status', {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                //'Content-Type': 'text/plain',
                //'Authorization': 'Bearer cognito-access-token'
            }
        }) 
            
        .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        .then(ned => console.log(ned))
        ;   
    }

    async function GetProtected() {
        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        fetch('http://localhost:8082/api', {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                //'Content-Type': 'text/plain',
                'Authorization': 'Bearer ' + accessToken,
                }
            })
            .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
            .then(ned => console.log(ned))

            
            
    }

    function GetCityData() {
        const item = 'Chicago';
        var url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=46d3fedc2acd8b13f8fa9d7d6d1c6f9d"

    fetch(url)
        .then((response) => response.json())
        .then((json) => console.log(json))
    
    }



    return (

        <div>
        <button onClick={GetStatus}>get status</button>
        <br />
        <button onClick={GetProtected}>get protected</button>
        <br />
        <button onClick={GetCityData}>get city data</button>
        <h1>{data}</h1>
      
    </div>

    )
}

export default Data;
'use client'

import styles from './styles.module.css'

import { useState, useEffect } from 'react'

import { getStatus, getURL } from '../items/route'
import { Console } from 'console'


function DataHome() {
    
    const [data, setData] = useState('**')
    const [list, setList] = useState([]) 

    async function handleGetStatus() {

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/health"
        console.log(url)
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
            
                    }
                });

                setData(await response.text())
                console.log(response)

        } catch (error) {
            console.error("error =>", error)
            setData("*** error ***")
        }       
    }

    async function GetProtected() {
        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        
        //console.log(accessToken)

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api"
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    //'Content-Type': 'text/plain',
                    //'Authorization': 'Bearer ' + accessToken,
                    }
                });

                setData(await response.text())
                console.log(response)

        } catch (error) {
            console.error("error =>", error)
            setData("*** error ***")
        }       
    }

    async function GetCityData() {
        const city = 'London';
        //var url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=46d3fedc2acd8b13f8fa9d7d6d1c6f9d"
        
        const url = "http://api.weatherapi.com/v1/current.json?key=ef50495ff7bd48708b0142219232003&q=" + city + "&aqi=yes"
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    //'Content-Type': 'text/plain',
                    
                    }
                });

                // parses JSON response into native JavaScript objects
                const obj = await response.json();
                console.log(await obj)
                const data = JSON.stringify(obj.location.name) + JSON.stringify(obj.location.country)
                setData(data)

        } catch (error) {
            console.error(error)

        }
    }

    function handleTest() {

        
        console.log(process.env.NODE_ENV)
        console.log(process.env.NEXT_PUBLIC_URL)
        console.log(process.env.NEXT_PUBLIC_MESSAGE)
        console.log(process.env.NEXT_PUBLIC_API_SERVER_URL)
           
    }

    async function GetCustomers() {
        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/customers"
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer ' + accessToken,
            
                    }
                });

                setData(await response.text())
                console.log(response)

        } catch (error) {
            console.error("error =>", error)
            setData("*** error ***")
        }   
    }

    async function getUserById() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }

        const url = "http://localhost:8080/user?lastName=last_name_2"
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer ' + accessToken,
            
                    }
                });

                // parses JSON response into native JavaScript objects
                const obj = await response.json();
                //console.log(await obj)
                const data = JSON.stringify(obj, null, 2)
                console.log(data)
                setData(data)

                

        } catch (error) {
            console.error("error =>", error)
            setData("*** error ***")
        }   
    }


    return (

        <div >
            <div >
            
                <button className={styles.buttonbar} onClick={handleGetStatus}>get status</button>
                <button className={styles.buttonbar} onClick={GetCityData}>get city data</button>

                
            </div>
            
            <ul>
                
                <li>{data}</li>
                
            </ul>
            
        </div>
    )
}

export default DataHome;
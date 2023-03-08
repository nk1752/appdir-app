'use client'

import styles from './styles.module.css'

import { useState, useEffect } from 'react'

function DataHome() {
    const [data, setData] = useState('**')

    const [list, setList] = useState([]) 

    async function GetStatus() {

       // useEffect( () => {
        const response = await fetch('http://localhost:8082/status', {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                //'Content-Type': 'text/plain',
                //'Authorization': 'Bearer cognito-access-token'
            }
        }) 
        
        const textData = await response.text()
        setData(textData)
        
       // })  
    }

    async function GetProtected() {
        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        const response = await fetch('http://localhost:8082/api', {
            method: 'GET',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                //'Content-Type': 'text/plain',
                'Authorization': 'Bearer ' + accessToken,
                }
            })
            
            const textData = await response.text()
            setData(textData)                 
    }
    

    async function GetCityData() {
        const item = 'Chicago';
        var url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=46d3fedc2acd8b13f8fa9d7d6d1c6f9d"

        const response = await fetch(url)
        const textResponse = await response.text() 
        setData(textResponse) 
        console.log(textResponse)
    
    }

    function handleTest() {
        

    }



    return (

        <div >
            <div >
            
                <button className={styles.buttonbar} onClick={GetStatus}>get status</button>
            
                <button className={styles.buttonbar} onClick={GetProtected}>get protected</button> 
            
                <button className={styles.buttonbar} onClick={GetCityData}>get city data</button>

                <button className={styles.buttonbar} onClick={handleTest}>test</button>
            </div>
            
            <p>{data}</p>
            
      
        </div>

    )
}

export default DataHome;
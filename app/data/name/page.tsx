'use client'

import { useState, useEffect } from 'react'

import styles from '../styles.module.css'

function IdHome() {

    const [data, setData] = useState('**')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')

    async function getUserByLastName() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }
        let url = ''
        if (process.env.PLATFORN == 'aks') {
            url = 'appdir-service.svc.cluster.local' + "/api/user?lastName=" + lastName;
        }
        else {
            url = 'http://localhost:8080' + "/api/user?lastName=" + lastName;   
        }

         url = 'restapiserver-service.rest-api-namespace.svc.cluster.local:8080' + "/api/user?lastName=" + lastName;
         console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
            
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

    async function getUserByFirstName() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/user?firstName=" + firstName
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
            
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

    async function getUserByFullName() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        //console.log(accessToken)

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/user?firstName=" + firstName + "&lastName=" + lastName
        console.log(url)

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
            
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
    
        <div className={styles.right} > 
            <div>
                <form  className={styles.card} >
                    <p>Find By User Last Name</p><br />
                    <label>Last Name: <input  type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />  </label><br /><br />
                    <button type='button' onClick={ getUserByLastName }>Submit</button><br /><br />
                </form>
            </div>
            
            <div>
                <form  className={styles.card} >
                    <p>Find By User First Name</p><br />
                    <label>First Name: <input  type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />  </label><br /><br />
                    <button type='button' onClick={ getUserByFirstName }>Submit</button><br /><br />
                </form>
            </div>

            <div>
                <form  className={styles.card} >
                    <p>Find By User Full Name</p><br />
                    <label>First Name: <input  type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />  </label><br />
                    <label>Last Name: <input  type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)} />  </label><br /><br />
                    <button type='button' onClick={ getUserByFullName }>Submit</button><br /><br />
                </form>
            </div>

            <p>{data}</p>

        </div>    

    )
}

export default IdHome;
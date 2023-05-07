'use client'

import { useState, useEffect } from 'react'

import styles from '../styles.module.css'

function IdHome() {

    const [data, setData] = useState('**')
    const [id, setId] = useState('1')
    const [service, setService] = useState('')

    async function getUserById() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        //console.log(accessToken)

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }

        let url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/user?id=" + id;
        console.log(url)

        url = service + "/api/user?id=" + id;

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
            <form  className={styles.card} >
        
                <h2>Find By User Id</h2><br />
                <label>ID: <input  type="number" value={id}  onChange={(e) => setId(e.target.value)} />  </label><br />
        
                <button type='button' onClick={ getUserById }>Submit</button><br /><br /><br />
  
            </form>

            <label>service: <input  type="number" value={service}  onChange={(e) => setService(e.target.value)} />  </label><br />

            <p>{data}</p>

        </div>    

    )
}

export default IdHome;
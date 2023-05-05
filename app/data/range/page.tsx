'use client'
import { useState, useEffect } from 'react'

import styles from '../styles.module.css'



function RangeHome() {

    const [data, setData] = useState('**')
    const [id1, setId1] = useState('1')
    const [id2, setId2] = useState('10')

    async function getUsersByRange() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log(accessToken)

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/user?id1=" + id1 + "&id2=" + id2
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

        <h2>Find By Range</h2><br />
        <label>FROM ID1: <input  type="number" value={id1}  onChange={(e) => setId1(e.target.value)} />  </label><br />
        <label>TO ID2: <input  type="number" value={id2}  onChange={(e) => setId2(e.target.value)} />  </label><br /><br />

        <button type='button' onClick={ getUsersByRange }>Submit</button><br /><br /><br />

    </form>

    <p>{data}</p>

</div>
    )
}

export default RangeHome;
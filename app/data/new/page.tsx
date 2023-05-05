'use client'

import { useState, useEffect } from 'react'

import styles from '../styles.module.css'

function NewHome() {

    const [data, setData] = useState('**')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [accountId, setAccountId] = useState('1')
    const [currentUser, setCurrentUser] = useState('???')

    

   async function saveNewUser() {

        const currentUser = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.LastAuthUser')
        const accessToken = localStorage.getItem('CognitoIdentityServiceProvider.52bqtlnmjv9dvslkip0kkpoco2.' + currentUser + '.accessToken')
        console.log('current user: ' + currentUser)
        console.log(accessToken)

        

        //const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/user"
        const params = {
            id: 1
        }

        const url = process.env.NEXT_PUBLIC_API_SERVER_URL + "/api/user"
        console.log(url)

        const userData = {
            
            firstName: firstName,
            lastName: lastName,
            accountId: accountId
        }


        console.log(userData);

        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
            
                    },
                body: JSON.stringify(userData)

                
                });

                // parses JSON response into native JavaScript objects
               const obj = await response.json();
                console.log(await obj)
                const data = JSON.stringify(obj)
                console.log(data)
                setData(data)

                console.log(await response)

                

        } catch (error) {
            console.error("error =>", error)
            setData("*** error ***")
        }   
    }



  return (
    
        <div className={styles.right} > 
            <div>
                <form  className={styles.card} >
                    <p>New User</p><br />
                    <label>First Name: <input  type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)} />  </label><br /><br />
                    <label>Last Name: <input  type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)} />  </label><br /><br />
                    <label>Account ID: <input  type="number" value={accountId}  onChange={(e) => setAccountId(e.target.value)} />  </label><br /><br />
                    <button type='button' onClick={ saveNewUser }>Submit</button><br /><br />
                </form>
            </div>
            
            

            <p>{data}</p>

        </div>    

    )
}

export default NewHome;
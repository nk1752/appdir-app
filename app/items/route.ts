//import { NextResponse } from 'next/server'
const url = process.env.NODE_ENV == 'development'? 'http://localhost:8080/status' : 'http://localhost:8080/api'

export async function getStatus() {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        //'API-Key': process.env.DATA_API_KEY,
        
      },
    });
    const data = await res.json();
  
    //return NextResponse.json({ data })
    return data
  }

  export function getURL() {
    const url = process.env.NODE_ENV

    return url 
  }
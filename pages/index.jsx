import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import soya from '../public/sbdy.png'

export default function Home() {

  const newDate = new Date()
  const [date, setDate] = useState('')
  const day = newDate.getDate()
  const month = "May"
  const year = newDate.getFullYear()

  const sec = newDate.getSeconds()
  const hours = newDate.getHours()

  setTimeout(() => {
    sec < 10 ? setDate(hours + '.0' + sec) : setDate(hours + '.' + sec)
  },1000)

  return (
    <div>
      <Head>
        <title>HAPPY BIRTHDAY!</title>
      </Head>
      <main className='container'>
        <div className="clock">
          <h1 className='time'>{day}/{month}/{year}</h1>
          <p>{date} {hours < 12 ? 'AM' : 'PM'}</p>
        </div>
        <div className='card'>
          <h2>Hello my lovely honey!</h2>
          <p id='text'>Happy Birthday to you who is bringing so much joy to my heart. I am thankful for every moment we spend together, and I wish our happiness never ends.</p>
          <p>Love you forever babe.</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <a className='btn' href="#card"><b>Click here babe</b></a>
      </main>
      <Image id='card' src={soya} alt="soya's birthday" />
    </div>
  )
}

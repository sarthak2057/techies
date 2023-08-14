'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from 'react'
import { Button } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [courses, setCourses] = useState()

  async function fetchQuery() {
    const baseUrl = `http://localhost:1337/api`
    const response = await fetch(`${baseUrl}/courses`)
    const data = await response.json()
    setCourses(data)
    console.log(data)
    return data
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        Courses{' '}
        <Button variant="contained" onClick={() => fetchQuery()}>
          Fetch Courses
        </Button>
      </div>
    </main>
  )
}

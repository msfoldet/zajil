"use client"
import styles from './track.module.css'
import Link from 'next/link'
import { useState } from 'react'


const Track = () => {
  const [track,setTrack]=useState();
  const isTrue = (track != undefined )
  return (
    <div className={styles.main}>
      <div className={styles.back}></div>
      <div className={styles.continer}>
        <form >
        <input type="number" onChange={(e) => setTrack(e.target.value)}  placeholder='ادخل رقم تتبع الشحنة' required/>
        {isTrue&&(
           <Link  href={{
            pathname:"/fozajil",
            query:{name:track},
           }}>تتبع الشحنة</Link>)
          }
          <p>
كيف يمكنني الحصول على رقم التتبع الخاص بي؟</p>
        </form>

      </div>
    </div>
  )
}

export default Track
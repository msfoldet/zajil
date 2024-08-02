"use client"

import React from 'react'
import Image from 'next/image'
import styles from './nphadsecuess.module.css'
import image23 from '../../../../../../../../../public/image23.jpg'
import ima from '../../../../../../../../../public/Capture-2.jpg'
import apple from '../../../../../../../../../public/icons8-apple-48.png'
import android from '../../../../../../../../../public/icons8-android-48.png'
import { useRouter,useSearchParams } from 'next/navigation'
const Page = () => {
    const router = useRouter()
    const x = useSearchParams();
    const datas = x.get("names")
  return (
    <div className={styles.continer}>
        <Image 
            src={image23}
        />
        <div>
            <h1>التوثيق</h1>
            <p>يرجى فتح تطبيق نفاذ , واختيار الموافقه على الطلب, وطلب الرقم الخاص بالعملية من قبل الموظف المسؤول</p>
            <Image 
                src={ima}
            />
            <div className={styles.type}>
                <p>من فضلك قم باختيار نوع جهازك</p>
                <div>
                <div>
                    <Image src={apple} width={50}/>
                    <button onClick={() => router.push(`https://apps.apple.com/sa/app/%D9%86%D9%81%D8%A7%D8%B0-nafath/id1598909871`)}>التالي</button>
                </div>
                <div>
                <Image src={android} width={50}/>
                <button onClick={() => router.push(`https://play.google.com/store/search?q=%D9%86%D9%81%D8%A7%D8%B0&c=apps&pli=1`)}>التالي</button>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
export default Page;

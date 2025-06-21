/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import EnquiryList from './EnquiryList';
import axios from "axios";
import {ToastContainer,toast} from 'react-toastify';

export default function Enquiry() {

  // eslint-disable-next-line no-unused-vars
  let [enquiryList, setEnquiryList] = useState([]);
  let [FormData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  let saveEnquiry = (e) => {
    e.preventDefault();

    // let FormData = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value
    // };

    axios.post('http://localhost:3000/api/website/enquiry/insert', FormData)
      .then((res) => {
        console.log(res.data);
        toast.success("ENQUIRY SUBMITTED SUCCESSFULLY")

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      })
  }
  const getAllenquiry = () => {
    axios.get('http://localhost:3000/api/website/enquiry/view')
      .then((res) => {
        return res.data
      })
      .then((finalData) => {
        if (finalData.status) {
          setEnquiryList(finalData.EnquiryList);
        }
      });
  };



  let getValue = (e) => {
    let inputName = e.target.name
    let inputValue = e.target.value
    let oldData = { ...FormData }

    oldData[inputName] = inputValue;
    setFormData(oldData)

  };


    useEffect(() => {
      getAllenquiry();
    }, []);
  

  return (
    <div>
      <ToastContainer />
      <h1 className='text-4xl text-center py-5 font-bold'>Enquiry..</h1>
      <div className='grid grid-cols-[30%_auto] gap-10'>
        <div className='bg-gray-900 p-4'>
          <h2 className='text-[20px] font-bold px-8 text-zinc-50'> Enquiry Form</h2>

          <form onSubmit={saveEnquiry}>
            <div className='py-3'>
              <Label htmlFor="name" className='text-white'>Your Name</Label>
              <TextInput onChange={getValue} value={FormData.name} name="name" type='text' placeholder='Enter Your Name' required />
            </div>
            <div className='py-3'>
              <Label htmlFor="email" className='text-white'>Your Email</Label>
              <TextInput onChange={getValue} value={FormData.email} name="email" type='email' placeholder='Enter Your Email' required />
            </div>
            <div className='py-3'>
              <Label htmlFor="phone" className='text-white'>Your Contact No.</Label>
              <TextInput onChange={getValue} value={FormData.phone} name="phone" type='text' placeholder='Enter Your Contact No.' required />
            </div>
            <div className='py-3'>
              <Label htmlFor='message' className='text-white'>Your Message</Label>
              <Textarea onChange={getValue} value={FormData.message} name="message" id='message' placeholder='Leave a Comment....' required rows={5}></Textarea>
            </div>
            <div className='py-3 '>
              <Button type="submit" className='bg-gray-600 w-[100%] hover:bg-green-700'>Save</Button>
            </div>
          </form>
        </div>

        <EnquiryList data={enquiryList} getAllenquiry={getAllenquiry}/>
      </div>
    </div>
  );
}

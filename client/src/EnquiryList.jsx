/* eslint-disable no-unused-vars */
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';


export default function EnquiryList({ data , getAllenquiry}) {
  const deleteRow = (delid) => {
  axios
    .delete(`http://localhost:3000/api/website/enquiry/delete/${delid}`)
    .then((res) => {
      if (res.data.status === 1) {
        toast.success("Enquiry deleted successfully");
      } else {
        toast.error("Failed to delete enquiry");
        getAllenquiry()
      }
    })
    .catch((err) => {
      toast.error("Something went wrong while deleting");
      console.error(err);
    });

};

  return (
    <div className='bg-gray-100'>
      <ToastContainer />
      <h2 className='text-[20px] font-bold px-8 mb-4 pt-4 '>
        Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table >
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr.No</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Contact</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>
              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {
              data.length >= 1 ?
                data.map((item, index) => {
                  return (
                    <TableRow key={item._id || index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.message}</TableCell>
                      <TableCell><a href="#" className="text-blue-600">Edit</a></TableCell>
                      <TableCell><a href="#" className="text-red-600" onClick={()=>deleteRow(item._id)}>Delete</a></TableCell>
                    </TableRow>
                  )
                })
                :
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell colSpan={7} className='text-center'>No
                    Data Found
                  </TableCell>
                </TableRow>
            }

          </TableBody>


        </Table>
      </div>
    </div>
  )
}

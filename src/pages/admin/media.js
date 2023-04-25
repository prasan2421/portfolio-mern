import Head from 'next/head';
import React, { useEffect, useState, useRef } from "react";
import { Box, Container } from '@mui/material';
import { MediaListResults } from '../../components/admin/media/media-list-results';
import { MediaListToolbar } from '../../components/admin/media/media-list-toolbar';
import { DashboardLayout } from '../../components/components/dashboard-layout';
// import { customers } from './__mocks__/customers';
import AWS from 'aws-sdk';
import axios from 'axios';

AWS.config.update({
  accessKeyId: process.env.ACCESSKEY_ID,
  secretAccessKey: process.env.SECRETKEY_ID,
  region: 'eu-north-1',
  // signatureVersion: 'v4',
});

const Media =  (props) => {
  
  const[uploaded, setUploaded] = React.useState(true)
  const [uploadedFiles, setUploadedFiles] = useState([]);
  

  const handleChildButtonClick=(newData)=>{
    // console.log(newData)
    setUploaded(newData);
    // alert(JSON.stringify(data))
  }

  const handleChildStateChange=(newData)=>{
    // console.log(newData)
    setUploaded(newData);
    // alert(JSON.stringify(data))
  }

  useEffect(() => {
    
    
  },[uploaded])

  return (
    <>
      <Head>
        <title>
          Media | Prasanna Tuladhar
        </title>
       
      </Head>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        // py: 8
      }}
    >
      <Container maxWidth={false}>
        <MediaListToolbar onButtonClick={handleChildButtonClick} />
        <Box sx={{ mt: 3 }}>
        <MediaListResults customers={uploadedFiles} event={uploaded} onHandleStateChange={handleChildStateChange}/>
         
          
        </Box>
      </Container>
    </Box>
      
    </>

  )
}
  



export default Media;

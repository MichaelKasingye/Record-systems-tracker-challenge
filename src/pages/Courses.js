/* eslint-disable no-unused-vars */
import { Card, Col, Row, Button, Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import moment from 'moment';
import { useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { EntriesSelector, fetchEntriesAsync } from '../features/Entries/entriesSlice';
import { faCashRegister, faChartLine, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import CustomTable from '../components/CustomTable';
import { useRegistrationData } from '../service/EntryHooks/entriesService';

import axios from "axios";

const Contacts = () => {

  const onSuccess = data => {
    // console.log({ data })
   const registrationDataI = { data:data}

  }

  const onError = error => {
    console.log({ error })
  }

  const {isloading, data, isError, error,} = useRegistrationData(onSuccess,onError, '/courses');
  localStorage.setItem("JWT", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo");

//  const { Entries, loading, hasErrors } = useSelector(EntriesSelector)
//  console.log(Entries.data?.data);
//  console.log(loading);


//  const dispatch = useDispatch();
// 
//  useEffect(() => {
  //  dispatch(fetchEntriesAsync('/courses'));
//   fetch( 'http://www.registration.unmc.ug/api/v1/districts/' )
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));
//  }, [])
  
// useEffect(() => {
//   const myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Authorization', 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo');

//   return fetch('http://www.registration.unmc.ug/api/v1/courses', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: myHeaders,
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       // console.log(user.location);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//  }, [])

// let registrationData = data?.data.data;
let ErrorMesssage = data?.message;

console.log(data);

if (isloading) {
  return <h1>loading...</h1>
}
if (isError) {
  return <h1>ERROR...{error}</h1>
}
if (error) {
  return <h1>ERROR...{error}</h1>
}

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
            <Link to={"/dashboard/formCourses"}>
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
           
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Entry
          </Dropdown.Toggle>
            </Link>
        </Dropdown>

        {/* <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            Export
          </Button>
        </ButtonGroup> */}
      </div>
      {ErrorMesssage? <h3>{ErrorMesssage}</h3> :  <CustomTable data = {data?.data.data} />}
    
    
    </>
  );
};


export default Contacts

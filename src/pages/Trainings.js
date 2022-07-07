/* eslint-disable no-unused-vars */
import {
  Card,
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import moment from "moment";
import { useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  EntriesSelector,
  fetchEntriesAsync,
} from "../features/Entries/entriesSlice";
import {
  faCashRegister,
  faChartLine,
  faPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {CustomTableTrainingSchool} from "../components/CustomTable";
import { useRegistrationData } from '../service/EntryHooks/entriesService';

import axios from "axios";

const Trainings = () => {


  const onSuccess = data => {
    // console.log({ data:data.data.data})
   const registrationDataI = { data:data.data.data}
  }

  const onError = error => {
    console.log({ error })
  }

const {isloading, data, isError, error,} = useRegistrationData(onSuccess,onError, '/trainingSchools')
localStorage.setItem("JWT", "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo");

//  useEffect(() => {
//   //  dispatch(fetchEntriesAsync('/courses'));
//   fetch('http://www.registration.unmc.ug/api/v1/contacts/')
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));
//  }, [])

 

let registrationData = data?.data.data;
// console.log(registrationData)

if (!registrationData ) {
  return <h1>loading...</h1>
}
if (isError) {
  return <h1>ERROR...{error}</h1>
}
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
        <h1>Training Schools List</h1>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Link to={"/dashboard/formTraining"}>
            <Dropdown.Toggle
              as={Button}
              variant="primary"
              size="sm"
              className="me-2"
            >
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

      <CustomTableTrainingSchool data={registrationData} />
    </>
  );
};

export default Trainings;

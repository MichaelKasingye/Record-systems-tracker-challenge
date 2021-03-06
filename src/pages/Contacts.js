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
// import { useDispatch, useSelector } from "react-redux";

import {
  faCashRegister,
  faChartLine,
  faPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import {CustomTable} from "../components/CustomTable";
import { useRegistrationData } from '../service/EntryHooks/entriesService';

import axios from "axios";

const Contacts = () => {

  const onSuccess = data => {
   const registrationDataI = { data:data.data.data}
  }

  const onError = error => {
    console.log({ error })
  }

const {isloading, data, isError, error,} = useRegistrationData(onSuccess,onError, '/contacts')
localStorage.setItem("JWT", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2NTc0MTcwLCJqdGkiOiJkNjEyMTViN2I5ZWY0OTc5YmQ5MGJiNTI0NWM1ZTZlMSIsInVzZXJfaWQiOiJlZmI0ZTFlNy1hOTA1LTQxZmQtOTAwOC0yNTU0MjYzNGQzY2MiLCJyb2xlIjoiYXBwbGljYW50In0.jvYMv_8tOLHZJPQziNUU_xZZ2x8UGUEelWZtU_qlBgQ");



let registrationData = data?.data.data;

if (!data ) {
  return <h1>loading...</h1>
}
if (isError) {
  return <h1>ERROR...{error}</h1>
}
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
        <h1>Contact List</h1>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Link to={"/dashboard/formContact"}>
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

      </div>

      <CustomTable data={registrationData} />
    </>
  );
};

export default Contacts;

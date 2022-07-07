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
import { CustomTableCourses } from "../components/CustomTable";
import { useRegistrationData } from "../service/EntryHooks/entriesService";

import axios from "axios";

const Contacts = () => {
  const onSuccess = (data) => {
    const registrationDataI = { data: data };
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isloading, data, isError, error } = useRegistrationData(
    onSuccess,
    onError,
    "/courses"
  );
  localStorage.setItem(
    "JWT",
    "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo"
  );

  let ErrorMesssage = data?.message;

  if (!data) {
    return <h1>loading...</h1>;
  }
  if (isError) {
    return <h1>ERROR...{error}</h1>;
  }
  if (error) {
    return <h1>ERROR...{error}</h1>;
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Link to={"/dashboard/formCourses"}>
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
      {ErrorMesssage ? (
        <h3>{ErrorMesssage}</h3>
      ) : (
        <CustomTableCourses data={data?.data.data} />
      )}
    </>
  );
};

export default Contacts;

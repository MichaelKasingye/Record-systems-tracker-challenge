/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Col, Row } from "@themesberg/react-bootstrap";
import { Button, Dropdown, ButtonGroup } from "@themesberg/react-bootstrap";
import { ButtonAFilled, ButtonAOutlined } from "../components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  EntriesSelector,
  fetchAnEntryAsync,
} from "../features/Entries/entriesSlice";
import { DescriptionWidget } from "../components/Widgets";
import AddEntryModal from "../components/AddEntryModal";
import DeleteEntryModal from "../components/DeleteEntryModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  AnalyticsWidgetPhone,
  AcquisitionWidget,
} from "../components/Widgets";
import { PageVisitsTable } from "../components/Tables";
import { trafficShares, totalOrders } from "../data/charts";
import { AnalyticsWidget } from "../components/AnalyticsWidget";
import { fetchProjectsAsync } from "../features/contact/contactSlice";
import { fetchUsersAsync } from "../features/users/usersSlice";

import {
  entryIdDelete,
  useEntryId,
} from "../service/EntryHooks/entriesService";

const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark me-3",
    },
    buttonsStyling: false,
  })
);

const EditEntry = () => {
  let { id } = useParams();
  const history = useHistory();

  const { isLoading, data, isError, error } = useEntryId(id);
  // console.log(data);
  const handleSubmitDelete = (e) => {
    e.preventDefault();
    entryIdDelete(id);
    customButton.fire("Deleted", "Product Deleted successfully");
    history.push("/dashboard/trainingSchools");
  };

  localStorage.setItem(
    "JWT",
    "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo"
  );

  let registrationData = data?.data.data;
  // console.log(registrationData);

  if (!data) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <p>View Training</p>
      <h3>{registrationData?.name ? registrationData.name : " "}</h3>
      {/* <DescriptionWidget info={registrationData} title="" /> */}

      <Col xs={12} xl={12} className="mb-1">
        <Row>
          <Col xs={12} lg={4} className="mb-4">
            <RankingWidget
              info1Title="Health Facility"
              info1={registrationData.healthFacility}
              info2Title="District"
              info2={
                !registrationData.district?.name
                  ? " "
                  : registrationData.district?.name
              }
              info3Title="Address"
              info3={registrationData.address}
            />
          </Col>

          <Col xs={12} lg={4} className="mb-4">
            <RankingWidget
              info1Title="Email"
              info1={registrationData.email}
              info2Title="Registration Status"
              info2={registrationData.registrationStatus}
              info3Title="Principal"
              info3={registrationData.principal}
            />
          </Col>
          <Col xs={12} lg={4} className="mb-4">
            <RankingWidget
              info1Title="Level"
              info1={registrationData.level}
              // info2Title ="Registration Status"
              // info2={registrationData.registrationStatus}
              // info3Title ="Principal"
              // info3={registrationData.principal}
            />
          </Col>
        </Row>
      </Col>

      <h4>View Courses</h4>
      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              {/* {} */}
              <Row>
                {registrationData.courses.map((info, index) => (
                  <Col xs={12} lg={4} className="mb-4" key={index}>
                    <TeamMembersWidget
                      name={info.name}
                      cadre={info.cadre}
                      durationYears={info.durationYears}
                      professionalQualification={info.professionalQualification}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>

        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          <form onSubmit={handleSubmitDelete}>
            <ButtonAFilled title="Delete" />
          </form>
          <AddEntryModal show="Edit All" 
        info={registrationData}  id={id} 
        />
          {/* <AddEntryModal show="Edit Single field" 
        info={Entries[0]} id={id} 
        /> */}
        </div>
      </Row>
    </>
  );
};

export default EditEntry;

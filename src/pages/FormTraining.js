/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";
import {
  getContacts,
  getCourses,
  getDistricts,
} from "../service/AddContactservice";
import { customStyles, selectOptions } from "../components/SelectOptions";
import {
  useAddEntryCourse,
  useAddTrainingSchool,
} from "../service/EntryHooks/entriesService";
import Select from "react-select";
import { Route, useParams } from "react-router-dom";

// import { Formik, Form, Field, ErrorMessage } from "formik";

const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark me-3",
    },
    buttonsStyling: false,
  })
);

const FormContact = () => {
  let { id } = useParams();

  const [contacts, setContacts] = useState([]);

  const { mutate, isLoading, isError, error } = useAddTrainingSchool();
  localStorage.setItem(
    "JWT",
    "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo"
  );

  const [data, setData] = useState({
    name: "",
    registrationStatus: "",
    healthFacility: "",
    principal: "",
    passRate: "",
    address: "",
    email: "",

    contacts: [],
    courses: [],
    district: [],
  });

  const finalData = {
    name: data.name,
    registrationStatus: data.registrationStatus,
    healthFacility: data.healthFacility,
    principal: data.principal,
    passRate: data.passRate,
    address: data.address,
    email: data.email,

    contacts: data.contacts,
    courses: data.courses,
    district: data.district,
  };

  console.log("c", data.contacts);
  console.log("co", data.courses);
  console.log("d", data.district);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(finalData);
    mutate(finalData);
    // customButton.fire("Success", "Entry created successfully", "success");
    setData({
      name: "",
      registrationStatus: "",
      healthFacility: "",
      principal: "",
      passRate: "",
      address: "",
      email: "",
    });
  };
  // console.log(data.cadre);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [dataCourses, setCoursesData] = useState();
  const [dataContacts, setContactsData] = useState();
  const [dataDistricts, setDistrictsData] = useState();

  // console.log(dataDistricts);
  // console.log(dataDistricts);

  useEffect(() => {
    getContacts().then((infoData) => setContactsData(infoData?.data.data));
    getCourses().then((infoData) => setCoursesData(infoData?.data.data));
    getDistricts().then((infoData) => setDistrictsData(infoData?.data.data));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <h5 className="mb-4">Create a new course entry</h5>
      <Row>
        <Col xs={12} xl={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    maxLength="40"
                    placeholder="Enter Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Registration Status</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    maxLength="50"
                    placeholder="Enter Cadre"
                    name="registrationStatus"
                    value={data.registrationStatus}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Principal</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    maxLength="40"
                    placeholder="Enter principal"
                    name="principal"
                    value={data.principal}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Health Facility</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    max="40"
                    placeholder=" Enter Health Facility"
                    name="healthFacility"
                    value={data.healthFacility}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    max="40"
                    placeholder=" Enter Address"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Pass Rate</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    max="100"
                    placeholder=" Enter Pass Rate"
                    name="passRate"
                    value={data.passRate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    max="100"
                    placeholder=" Enter email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              {/* Contacts category */}
              <Col md={6} className="mb-3">
                <Form.Group>
                  {dataContacts && (
                    <select name="contacts" onChange={handleChange} id="cars">
                      {[...dataContacts]?.map((info, index) => (
                        <option key={index} value={info.id}>
                          {info.phoneNumber}{" "}
                        </option>
                      ))}
                    </select>
                  )}
                </Form.Group>
              </Col>
              {/* courses category */}
              <Col md={6} className="mb-3">
                <Form.Group>
                  {dataCourses && (
                    <select name="courses" onChange={handleChange} id="cars">
                      {[...dataCourses]?.map((info, index) => (
                        <option key={index} name="courses" value={info.id}>
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  )}
                </Form.Group>
              </Col>
              {/* district category */}
              <Col md={6} className="mb-3">
                <Form.Group>
                  {dataDistricts && (
                    <select name="district" onChange={handleChange} id="cars">
                      {[...dataDistricts].map((info, index) => (
                        <option key={index} name="district" value={info.id}>
                          {info.name}{" "}
                        </option>
                      ))}
                    </select>
                  )}
                </Form.Group>
              </Col>
            </Row>
            {data.name === "" ||
            data.principal === "" ||
            data.healthFacility === "" ||
            data.registrationStatus === "" ? (
              "Kindly fill all fields"
            ) : (
              <div className="mt-3">
                <Button variant="primary" type="submit">
                  {isLoading ? "creating event..." : "create new event"}
                </Button>
              </div>
            )}
          </Form>
          {error && error}
        </Col>
      </Row>
    </>
  );
};

export default FormContact;

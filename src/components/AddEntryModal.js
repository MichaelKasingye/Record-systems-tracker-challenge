/* eslint-disable no-restricted-globals */
/* eslint-disable no-native-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {
  Col,
  Row,
  Card,
  Form,
  Button,
  Modal,
} from "@themesberg/react-bootstrap";
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
import axios from "axios";

const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark me-3",
    },
    buttonsStyling: false,
  })
);

const AddEntryModal = ({ show, info, id }) => {
  // console.log(id);
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  const [contacts, setContacts] = useState([]);

  const { mutate, isLoading, isError, error } = useAddTrainingSchool();

  const [data, setData] = useState({
    name: "",
    registrationStatus: "",
    healthFacility: "",
    principal: "",
    passRate: "",
    address: "",
    email: "",
    level: "",

    contacts: [],
    courses: [],
  });

  const finalData = {
    name: data.name,
    level: data.level,
    registrationStatus: data.registrationStatus,
    healthFacility: data.healthFacility,
    principal: data.principal,
    passRate: data.passRate,
    address: data.address,
    email: data.email,
    createdAt: Date(Date.now()).toString(),
    contacts: data.contacts,
    courses: data.courses,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(finalData);

    axios
      .put(
        "http://www.registration.unmc.ug/api/v1/trainingSchools/" + id,
        finalData,
        {
          headers: {
            Authorization:
              "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo",
          },
        }
      )
      .then((info) => console.log(info))
      .catch((error) => {
        console.log(error);
      });

    setData({
      name: "",
      registrationStatus: "",
      healthFacility: "",
      principal: "",
      passRate: "",
      address: "",
      email: "",
      level: "",
    });
  };
  // console.log(data.cadre);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const [dataCourses, setCoursesData] = useState();
  const [dataContacts, setContactsData] = useState();
  const [dataDistricts, setDistrictsData] = useState();

  useEffect(() => {
    getContacts().then((infoData) => setContactsData(infoData?.data.data));
    getCourses().then((infoData) => setCoursesData(infoData?.data.data));
    getDistricts().then((infoData) => setDistrictsData(infoData?.data.data));
  }, []);

  return (
    <React.Fragment>
      <Button
        variant="primary"
        size="sm"
        className="my-3 rounded-1 px-4"
        onClick={() => setShowDefault(true)}
      >
        {show}
      </Button>

      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="h4">Edit Entry</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
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
                          <Form.Label>Level</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            max="100"
                            placeholder=" Enter level"
                            name="level"
                            value={data.level}
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
                            <select
                              name="contacts"
                              onChange={handleChange}
                              id="cars"
                            >
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
                            <select
                              name="courses"
                              onChange={handleChange}
                              id="cars"
                            >
                              {[...dataCourses]?.map((info, index) => (
                                <option
                                  key={index}
                                  name="courses"
                                  value={info.id}
                                >
                                  {info.name}{" "}
                                </option>
                              ))}
                            </select>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    {data.name === "" ? (
                      "Kindly fill  fields"
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
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          {/* <ButtonAFilled title="close" onClick={handleClose}/> */}
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default AddEntryModal;

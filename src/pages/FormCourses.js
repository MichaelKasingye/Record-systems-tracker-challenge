/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { useState } from "react";
import { useAddEntryCourse } from "../service/EntryHooks/entriesService";
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
  const { mutate, isLoading, isError, error } = useAddEntryCourse();

  const [data, setData] = useState({
    name: '',
    durationYears: '',
    professionalQualification: '',
    cadre: ''
  });

  const finalData = {
    name: data.name,
    durationYears: data.durationYears,
    professionalQualification: data.professionalQualification,
    cadre: data.cadre
  };

  console.log(isLoading);
  localStorage.setItem(
    "JWT",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZ    XhwIjoxNjU3NjIzNTEzLCJqdGkiOiI3ODg1MDE2MGVmOTM0MzQ1YThhOTg4N    2E5MmY0OTM2NiIsInVzZXJfaWQiOiJjMDBhMzI5Mi1lNTlhLTQ2Y2EtYmM3ZC    00NzNhMTFhNjFiNjAiLCJyb2xlIjoiYWRtaW4ifQ.sjMnunsbsLGmqCZbLVi3TQ7khfbQJltu8UnDlQ9etPo"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(finalData);
    mutate(finalData);
    customButton.fire("Success", "Entry created successfully", "success");
    setData({
      name: '',
      durationYears:'',
      professionalQualification:'',
      cadre:''
    });
  };
console.log(data.cadre);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
                    maxLength = "40"
                    placeholder="Enter Name"
                    name="name"
                    value={data.name }
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Cadre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    maxLength = "15"
                    placeholder="Enter Cadre"
                    name="cadre"
                    value={data.cadre }
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Professional Qualification</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    maxLength = "40"
                    placeholder="Enter Professional Qualification"
                    name="professionalQualification"
                    value={data.professionalQualification }
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Duration Years</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    max="100"
                    placeholder=" Enter Duration Years"
                    name="durationYears"
                    value={data.durationYears}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
                {
                  data.name === "" || data.professionalQualification === "" || data.durationYears === "" || data.cadre === "" ? ("Kindly fill all fields"
            ):
            <div className="mt-3">
            <Button variant="primary" type="submit">
              {isLoading ? 'creating event...' : 'create new event'}
            </Button>
          </div>
            }
          </Form>
          {error && error}
        </Col>
      </Row>


    </>
  );
};

export default FormContact;

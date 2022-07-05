/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { Col, Row, Card, Form, Button } from "@themesberg/react-bootstrap";
import { useState } from "react";
import { useAddEntryContacts } from "../service/EntryHooks/entriesService";
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
  const { mutate, isLoading, isError, error } = useAddEntryContacts();

  const [data, setData] = useState({
    phoneNumber: "",
  });

  const finalData = {
    phoneNumber: data.phoneNumber,
  };

  console.log(isLoading);
  localStorage.setItem(
    "JWT",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2NTc0MTcwLCJqdGkiOiJkNjEyMTViN2I5ZWY0OTc5YmQ5MGJiNTI0NWM1ZTZlMSIsInVzZXJfaWQiOiJlZmI0ZTFlNy1hOTA1LTQxZmQtOTAwOC0yNTU0MjYzNGQzY2MiLCJyb2xlIjoiYXBwbGljYW50In0.jvYMv_8tOLHZJPQziNUU_xZZ2x8UGUEelWZtU_qlBgQ"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(finalData);
    mutate(finalData);
    customButton.fire("Success", "Entry created successfully", "success");
    setData({
      phoneNumber: "",
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <h5 className="mb-4">create a new entry</h5>
      <Row>
        <Col xs={12} xl={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12} className="mb-3">
                <Form.Group id="title">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    max="100000000"
                    maxLength = "10"
                    placeholder="Enter Number"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="mt-3">
                {data.phoneNumber && (
                <Button variant="primary" type="submit">
              {isLoading ? 'creating event...' : 'create new event'}
            </Button>
            )}
            
          </div>
          </Form>
          {error && error}
        </Col>
      </Row>


    </>
  );
};

export default FormContact;

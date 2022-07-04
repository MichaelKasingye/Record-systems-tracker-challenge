/* eslint-disable no-restricted-globals */
/* eslint-disable no-native-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Modal ,Col, Row, Card, Form } from '@themesberg/react-bootstrap';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  projectsSelector,
  createProjectAsync,
} from "../features/projects/projectSlice";
import { createEventAsync, EntriesSelector,updateEventAsync } from '../features/Entries/entriesSlice';
import { imageSelector } from '../features/images/imageSlice';
import { ButtonAFilled, ButtonAOutlined } from "../components/Buttons";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { selectOptions, customStyles } from './SelectOptions';
import Select from 'react-select';
import ImageUpload from "./ImageUpload";
import ProgressBar from 'react-bootstrap/ProgressBar'



const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: "btn btn-dark me-3",
    },
    buttonsStyling: false,
  })
);



const AddEntryModal = ({ show, info , id }) => {
  console.log(info);
  console.log(id);


  const [showDefault, setShowDefault] = useState(false);
const handleClose = () => setShowDefault(false);
const { imageUrl, uploading, uploaded } = useSelector(imageSelector)
const { loading } = useSelector(EntriesSelector)
const dispatch = useDispatch();
const [categories, setCategories] = useState([])
const [data, setData] = useState({
  title:"",
  price: "",
  body:"" ,
});

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    if (!imageUrl) {
      return customButton.fire(
        "Ooops, something doesn't seem right",
        'Please upload an Image and try again',
        'error'
      );
    }
    dispatch(updateEventAsync(id,{img_url: imageUrl}));
    customButton.fire('Success', 'Image Edited successfully', 'success');
  };

  const handleSubmitTitle = async (e) => {
    e.preventDefault();
    dispatch(updateEventAsync(id,{title: data.title}));
    customButton.fire('Success', 'Price Edited successfully', 'success');
  };
  
  const handleSubmitPrice = async (e) => {
    e.preventDefault();
    dispatch(updateEventAsync(id,{price: data.price}));
    customButton.fire('Success', 'Title Edited successfully', 'success');
  };

  const handleSubmitCategories = async (e) => {
    e.preventDefault();
    dispatch(updateEventAsync(id,{categories: categories}));
    customButton.fire('Success', 'Title Edited successfully', 'success');
  };

  const handleSubmitBody = async (e) => {
    e.preventDefault();
    dispatch(updateEventAsync(id,{body: data.body}));
    customButton.fire('Success', 'Title Edited successfully', 'success');
  };

  const handleChange =  (e) =>{
    setData({ ...data, [e.target.name]: e.target.value });
  }
  // handle multi select
  const selectFn = (e) => {
    e.forEach(el => {
      categories.includes(el.value) ?  console.log('yes') : setCategories([...categories, el.value])
    })
  }

  return (
<React.Fragment>
  <Button variant="primary" size="sm" className="my-3 rounded-1 px-4" onClick={() => setShowDefault(true)}>{show}</Button>

  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title className="h4">Edit Entry</Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
     
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>

    {/* Submit title */}
      <Form onSubmit={handleSubmitTitle}>
      <Col md={12} className="mb-3">
              <Form.Group id="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required 
                  // {!data.title && required isInvalid}
                  type="text"
                  placeholder="Edit entry title"
                  name="title"
                  defaultValue={info?.title}
                  // value={info?.title}
                  onChange={handleChange}
                  // onChange={(e) => setTitle(e.currentTarget.value)}
                />
              </Form.Group>
            </Col> 
          <div className="my-1 ">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit'}
            </Button>
          </div>
        </Form>

  {/* SUBMIT PRICE */}
  <Form onSubmit={handleSubmitPrice}>
        <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="product cost..."
                  name="price"
                  defaultValue={info?.price}
                  // value={data.price}
                  onChange={handleChange}
                  // onChange={(e) => setPrice(e.currentTarget.value)}
                />

          <div className="my-2 ">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit'}
            </Button>
          </div>
        </Form>

  {/* SUBMIT CATEGORIES */}
  <Form onSubmit={handleSubmitCategories}>
        <Form.Label>Select Categories</Form.Label>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group>
                <Select
                  name="categories"
                  defaultInputValue={info?.categories[0]}
                  onChange={(e) => selectFn(e)}
                  options={selectOptions}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#61DAFB',
                      primary: '#61DAFB',
                    },
                  })}
                  styles={customStyles}
                  isMulti
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="my-1 ">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit'}
            </Button>
          </div>
        </Form>

        {/* SUBMIT Body */}
  <Form onSubmit={handleSubmitBody}>
        <Form.Label>Description</Form.Label>
          <Row>
            <Col sm={12} className="mb-3">
              <Form.Control as="textarea"
               rows="3"
               defaultValue={info?.body}
               name="body"
                onChange={handleChange}
                  />
            </Col>
          </Row>

          <div className="my-2 ">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit'}
            </Button>
          </div>
        </Form>

 {/* SUBMIT IMAGE */}
 <Form onSubmit={handleSubmitImage}>
        <ImageUpload />
        {!uploaded ?<span> Wait for the progress bar to complete when you upload... </span>:<span> Complete, you now submit image</span>}
      <ProgressBar striped variant="success" animated  now={!uploaded?0:100} />  

          <div className="mt-0 ">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit Image'}
            </Button>
          </div>
        </Form>

    
{/* 
        <Form onSubmit={handleSubmitImage}>
          <Row>
            <Col md={12} className="mb-3">
              <Form.Group id="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  // required
                  type="text"
                  placeholder="Enter entry title"
                  name="title"
                  defaultValue={info?.title}
                  // value={info?.title}
                  value={data.title}
                  onChange={handleChange}
                  // onChange={(e) => setTitle(e.currentTarget.value)}
                />
              </Form.Group>
            </Col>
          
          </Row>
          <Row className="align-items-center">
            <Col md={12} className="mb-3">
              <Form.Group id="weight">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  // required
                  type="number"
                  placeholder="product cost..."
                  name="price"
                  defaultValue={info?.title}
                  // value={data.price}
                  onChange={handleChange}
                  // onChange={(e) => setPrice(e.currentTarget.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group>
                <Form.Label>Select categories</Form.Label>
                <Select
                  name="categories"
                  defaultInputValue={info?.categories[0]}
                  onChange={(e) => selectFn(e)}
                  options={selectOptions}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: '#61DAFB',
                      primary: '#61DAFB',
                    },
                  })}
                  styles={customStyles}
                  isMulti
                />
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Description</h5>
          <Row>
            <Col sm={12} className="mb-3">
              <Form.Control as="textarea"
               rows="3"
               defaultValue={info?.body}
               name="body"
                onChange={handleChange}
                  />
            </Col>
          </Row>

        <ImageUpload />
          <div className="mt-3">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Submit entry'}
            </Button>
          </div>
        </Form> */}
        
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

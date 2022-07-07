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
} from "../features/contact/contactSlice";
import { createEventAsync, EntriesSelector,updateEventAsync,deleteEntryAsync } from '../features/Entries/entriesSlice';
// import { imageSelector } from '../features/images/imageSlice';
import { ButtonAFilled, ButtonAOutlined } from "./Buttons";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { selectOptions, customStyles } from './SelectOptions';
import Select from 'react-select';
import ImageUpload from "./ImageUpload";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { entryIdDelete } from "../service/EntryHooks/entriesService";



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
const { loading } = useSelector(EntriesSelector)
const dispatch = useDispatch();


  const handleSubmitDelete = (e) => {
    e.preventDefault();
    entryIdDelete(id)
    customButton.fire('Deleted', 'Product Deleted successfully');
  };

  return (
<React.Fragment>
  <Button variant="primary" size="sm" className="my-3 rounded-1 px-4" onClick={() => setShowDefault(true)}>{show}</Button>

  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title className="h4">Delete Entry</Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
     
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>

  <Form onSubmit={handleSubmitDelete} className="d-flex justify-content-center border-0">
            <Button variant="primary rounded-1 px-4" type="submit">
              {loading ? 'Updating entry...' : 'Delete'}
            </Button>
        </Form>
       
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

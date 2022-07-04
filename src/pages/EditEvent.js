/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Col, Row } from "@themesberg/react-bootstrap";
import EventForm from "../components/EntryForm";
import { ButtonAFilled, ButtonAOutlined } from "../components/Buttons";
import { useDispatch, useSelector } from 'react-redux';
import { EntriesSelector, fetchAnEntryAsync } from '../features/Entries/entriesSlice';
import {DescriptionWidget2} from '../components/Widgets'
import AddEntryModal from "../components/AddEntryModal";
import DeleteEntryModal from "../components/DeleteEntryModal";



const EditEvent = () => {
 const { Entries, loading, hasErrors } = useSelector(EntriesSelector)
  let { id } = useParams();
 const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAnEntryAsync(id));
  }, [dispatch, id])



  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <p>View entry</p>
      <DescriptionWidget2 info = {Entries} title = ""/>
      <div  className="d-flex justify-content-evenly align-items-center flex-wrap">
     <DeleteEntryModal show="Delete Product" info = {Entries[0]} id = {id}/>
     <AddEntryModal show="Edit All" info = {Entries[0]} id = {id}/>
     <AddEntryModal show="Edit Single field" info = {Entries[0] } id = {id}/>

      </div>
    </>
  );
};

export default EditEvent;

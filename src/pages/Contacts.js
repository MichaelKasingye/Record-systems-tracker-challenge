/* eslint-disable no-unused-vars */
import { Card, Col, Row, Button, Dropdown, ButtonGroup} from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import moment from 'moment';
import { useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { EntriesSelector, fetchEntriesAsync } from '../features/Entries/entriesSlice';
import { faCashRegister, faChartLine, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import CustomTable from '../components/CustomTable';

import axios from "axios";

const Contacts = () => {
 const { Entries, loading, hasErrors } = useSelector(EntriesSelector)
//  console.log(Entries.data?.data);
//  console.log(loading);
//  console.log(hasErrors);


 const dispatch = useDispatch();
// 
 useEffect(() => {
   dispatch(fetchEntriesAsync('/contacts'));
  // fetch('http://www.registration.unmc.ug/api/v1/contacts/')
	// .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(err => console.error(err));
 }, [dispatch])
  

 if (loading) {
  return <h1>loading...</h1>
}
if (hasErrors) {
  return <h1>ERROR...</h1>
}

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex"></div>
      </div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
            <Link to={"/dashboard/entry/new"}>
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
           
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            New Entry
          </Dropdown.Toggle>
            </Link>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            Export
          </Button>
        </ButtonGroup>
      </div>

      <CustomTable data = {Entries.data?.data} />
    
    </>
  );
};


export default Contacts

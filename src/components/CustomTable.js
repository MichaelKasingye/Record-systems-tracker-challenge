/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';

// import { projectsSelector } from '../features/projects/projectSlice'
// import { createEventAsync, EntriesSelector, deleteEntryAsync } from '../features/Entries/entriesSlice';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import deleteEntry from "../service/EntryHooks/znullFill";

const customButton = withReactContent(
  Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-dark me-3',
    },
    buttonsStyling: false,
  })
);

export  const CustomTable = ({data}) => {
      // const dispatch = useDispatch();
      // const infoData = data.data
//  console.log(data);

      // const { projects } = useSelector();


      const handleDelete =  (docId) => {
        // e.preventDefault();
        if (!docId) {
          return customButton.fire(
            "Ooops, something doesn't seem right",
            'Please upload an Image and try again',
            'error'
          );
        }
        console.log("handleDelete activated");
        
        // dispatch(deleteEntryAsync(id));
        // deleteEntry(docId)
        // customButton.fire('Success', 'Entry deleted successfully', 'success');
      };


    const TableRow = (props) => {
      const { id, phoneNumber, createdAt} = props;
  // console.log(id);
      return (
        <tr>
           <td>
          <Card.Link as={Link} className="fw-normal"
              to={`/dashboard/edit/event/${id}`}
            >
            <span ><FontAwesomeIcon icon={faEdit} className="me-2" /></span>
            </Card.Link>
            </td>
          <td>
            <span className="fw-normal">
            {id?.slice(0,4)}
            </span>
          </td>
          {/* <td>
            <span className="fw-normal">
            <img src={img_url} height="30" width="40" alt="splash"/>
            </span>
          </td> */}
        <td>
          <span className="fw-normal">
            {phoneNumber}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {createdAt}
          </span>
        </td>
          {/* <td>
            <span className="fw-normal">
              {phoneNumber}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {phoneNumber}
            </span>
          </td> */}
         
        </tr>
      );
    };
  
    return (
      <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Table hover className="user-table align-data-center">
            <thead>
              <tr>
              <th className="border-bottom"><FontAwesomeIcon icon={faEdit} className="me-2" /></th>
                <th className="border-bottom">Id</th>
                <th className="border-bottom">Phone Number</th>
                <th className="border-bottom">Created at</th>
                {/* <th className="border-bottom">Price</th>
                <th className="border-bottom">Category</th> */}
              </tr>
            </thead>
            <tbody>
              {data?.map((t, i) => <TableRow key={`transaction-${i}`} {...t} />)}
            </tbody>
          </Table>
          <Card.Footer className="px-3 border-0 d-lg-flex align-data-center justify-content-between">
            {/* <Nav>
              <Pagination className="mb-2 mb-lg-0">
                <Pagination.Prev>
                  Previous
                </Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
                <Pagination.Next>
                  Next
                </Pagination.Next>
              </Pagination>
            </Nav> */}
            <small className="fw-bold">
              Showing <b>{data?.length}</b> out of <b>{data?.length}</b> entries
            </small>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  export  const CustomTableDistricts = ({data}) => {
    // const dispatch = useDispatch();
    // const infoData = data.data
// console.log(data);

    // const { projects } = useSelector();


    const handleDelete =  (docId) => {
      // e.preventDefault();
      if (!docId) {
        return customButton.fire(
          "Ooops, something doesn't seem right",
          'Please upload an Image and try again',
          'error'
        );
      }
      console.log("handleDelete activated");
      
      // dispatch(deleteEntryAsync(id));
      // deleteEntry(docId)
      // customButton.fire('Success', 'Entry deleted successfully', 'success');
    };


  const TableRow = (props) => {
    const { id, name,regionId ,createdAt} = props;
// console.log(id);
    return (
      <tr>
         <td>
        <Card.Link as={Link} className="fw-normal"
            to={`/dashboard/edit/event/${id}`}
          >
          <span ><FontAwesomeIcon icon={faEdit} className="me-2" /></span>
          </Card.Link>
          </td>
        <td>
          <span className="fw-normal">
          {id?.slice(0,4)}
          </span>
        </td>
      <td>
        <span className="fw-normal">
          {name}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {regionId}
        </span>
      </td>
      <td>
        <span className="fw-normal">
          {createdAt}
        </span>
      </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-data-center">
          <thead>
            <tr>
            <th className="border-bottom"><FontAwesomeIcon icon={faEdit} className="me-2" /></th>
              <th className="border-bottom">Id</th>
              <th className="border-bottom">Phone Number</th>
              <th className="border-bottom">Created at</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((t, i) => <TableRow key={`transaction-${i}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-data-center justify-content-between">
          {/* <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav> */}
          <small className="fw-bold">
            Showing <b>{data?.length}</b> out of <b>{data?.length}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};



  export  const CustomTableCourses = ({data}) => {
    // const dispatch = useDispatch();
    // const infoData = data.data
//  console.log(data);

    // const { projects } = useSelector();


    const handleDelete =  (docId) => {
      // e.preventDefault();
      if (!docId) {
        return customButton.fire(
          "Ooops, something doesn't seem right",
          'Please upload an Image and try again',
          'error'
        );
      }
      console.log("handleDelete activated");

    };


  const TableRow = (props) => {
    const { id, name,cadre, professionalQualification,  durationYears,createdAt, } = props; 
    return (
      <tr>
         <td>
        <Card.Link as={Link} className="fw-normal"
            to={`/dashboard/edit/event/${id}`}
          >
          <span ><FontAwesomeIcon icon={faEdit} className="me-2" /></span>
          </Card.Link>
          </td>
        <td>
          <span className="fw-normal">
          {id?.slice(0,4)}
          </span>
        </td>
       

        <td>
            <span className="fw-normal">
              {name}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {cadre}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {professionalQualification}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {durationYears}
            </span>
          </td>
          <td>
            <span className="fw-normal">
              {createdAt}
            </span>
          </td>
        {/* <td>
          <span className="fw-normal">
            {phoneNumber}
          </span>
        </td>
        */}
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-data-center">
          <thead>
            <tr>
            <th className="border-bottom"><FontAwesomeIcon icon={faEdit} className="me-2" /></th>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Cadre</th>
              <th className="border-bottom">Professional Qualification</th>
              <th className="border-bottom">Duration Years</th>
              <th className="border-bottom">Created at</th>

            </tr>
          </thead>
          <tbody>
            {data?.map((t, i) => <TableRow key={`transaction-${i}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-data-center justify-content-between">
          <Nav>
            {/* <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination> */}
          </Nav>
          <small className="fw-bold">
            Showing <b>{data?.length}</b> out of <b>{data?.length}</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export  const CustomTableTrainingSchool= ({data}) => {
  // const dispatch = useDispatch();
  // const infoData = data.data
//  console.log(data);

  const handleDelete =  (docId) => {
    // e.preventDefault();
    if (!docId) {
      return customButton.fire(
        "Ooops, something doesn't seem right",
        'Please upload an Image and try again',
        'error'
      );
    }
    console.log("handleDelete activated");

  };


const TableRow = (props) => {
  const { id, name, principal,healthFacility,address, createdAt} = props; 
  return (
    <tr>
       <td>
      <Card.Link as={Link} className="fw-normal"
          to={`/dashboard/edit/entry/${id}`}
        >
        <span ><FontAwesomeIcon icon={faEdit} className="me-2" /></span>
        </Card.Link>
        </td>
      <td>
        <span className="fw-normal">
        {id?.slice(0,4)}
        </span>
      </td>
     

      <td>
          <span className="fw-normal">
            {name}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {principal}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {healthFacility}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {address}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {createdAt}
          </span>
        </td>
      {/* <td>
        <span className="fw-normal">
          {phoneNumber}
        </span>
      </td>
      */}
    </tr>
  );
};

return (
  <Card border="light" className="table-wrapper table-responsive shadow-sm">
    <Card.Body className="pt-0">
      <Table hover className="user-table align-data-center">
        <thead>
          <tr>
          <th className="border-bottom"><FontAwesomeIcon icon={faEdit} className="me-2" /></th>
            <th className="border-bottom">ID</th>
            <th className="border-bottom">Name</th>
            <th className="border-bottom">Principal</th>
            <th className="border-bottom">HealthFacility</th>
            <th className="border-bottom">Address</th>
            <th className="border-bottom">Created at</th>

          </tr>
        </thead>
        <tbody>
          {data?.map((t, i) => <TableRow key={`transaction-${i}`} {...t} />)}
        </tbody>
      </Table>
      <Card.Footer className="px-3 border-0 d-lg-flex align-data-center justify-content-between">
        <Nav>
          {/* <Pagination className="mb-2 mb-lg-0">
            <Pagination.Prev>
              Previous
            </Pagination.Prev>
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
            <Pagination.Next>
              Next
            </Pagination.Next>
          </Pagination> */}
        </Nav>
        <small className="fw-bold">
          Showing <b>{data?.length}</b> out of <b>{data?.length}</b> entries
        </small>
      </Card.Footer>
    </Card.Body>
  </Card>
);
};
   

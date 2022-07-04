/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import { Col, Row } from '@themesberg/react-bootstrap';
import EntryForm from "../components/EntryForm"
import ImageUpload from '../components/ImageUpload';

const NewEntry = () => {
    return (
        <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
        </div>
      </div>

      <Row>
        <Col xs={12} xl={8}>
         <EntryForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ImageUpload />
            </Col>
            <Col xs={12}>
             {/* {} */}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
    )
}

export default NewEntry

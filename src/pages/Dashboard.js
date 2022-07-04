/* eslint-disable import/no-anonymous-default-export */

/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faChartLine, faPlus, faTasks } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Dropdown, ButtonGroup } from "@themesberg/react-bootstrap";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  AnalyticsWidgetPhone,
  AcquisitionWidget,
} from "../components/Widgets";
import { PageVisitsTable } from "../components/Tables";
import { trafficShares, totalOrders } from "../data/charts";
import { AnalyticsWidget } from "../components/AnalyticsWidget";
import { EntriesSelector, fetchEntriesAsync } from "../features/Entries/entriesSlice";
import { usersSelector } from "../features/users/usersSlice";
import { fetchProjectsAsync } from "../features/projects/projectSlice";
import { fetchUsersAsync } from "../features/users/usersSlice";

const Dashboard = () => {
  const { Entries, loading, hasErrors } = useSelector(EntriesSelector);
  const { users } = useSelector(usersSelector)
  const dispatch = useDispatch();
  const total = Entries.length;

  // useEffect(() => {
  //   dispatch(fetchEntriesAsync())
  //   dispatch(fetchUsersAsync())
  //   dispatch(fetchProjectsAsync)
  // }, [dispatch]);
  return (
    <>
    <h1>Overview</h1>

      {/* <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Users"
            title={`${users.length}`}
            // period="Feb 1 - Apr 1"
            // percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Entries"
            title={`${Entries.length}`}
            // period="Feb 1 - Apr 1"
            // percentage={28.4}
            icon={faChartLine}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget title="Entries Funnel" data={trafficShares} />
        </Col>
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <AnalyticsWidget title="Analytics" value={total} percentage="1" />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <AnalyticsWidgetPhone title="Analytics" value={total} percentage={1} />
        </Col>
      </Row> */}

      {/* <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>

                <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col>

                <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </>
  );
};

export default Dashboard;

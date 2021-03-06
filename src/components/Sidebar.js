/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faBook,
  faBoxOpen,
  faChartPie,
  faFileAlt,
  faSignOutAlt,
  faTimes,
  faHandHoldingUsd,
  faCog,
  faUserAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Badge,
  Image,
  Button,
  Dropdown,
  Accordion,
  Navbar,
} from "@themesberg/react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import decode from "jwt-decode";
//import AssignmentIcon from '@material-ui/icons/Assignment';
import { Routes } from "../routes";
import ReactHero from "../assets/images/react-hero-logo.svg";
import ProfilePicture from "../assets/images/profile_placeholder.png";
import { useAuth } from "../context/AuthContext";

const Sidebar = (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const { logout } = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const { user } = props;

  const Logout = async () => {
    await logout();
    history.push(Routes.Login.path);
  };

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand className="me-lg-5" as={Link} to={"/dashboard"}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ProfilePicture}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, {user?.email}</h6>
                  <Button
                    variant="secondary"
                    size="xs"
                    className="text-dark"
                    onClick={Logout}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Records-system" link={"/dashboard"} />

              <NavItem title="Overview" link={"/dashboard"} icon={faChartPie} />
              <NavItem
                title="Contacts"
                icon={faCalendarAlt}
                link={"/dashboard/contacts"}
              />
              <NavItem
                title="All Courses"
                icon={faUserAlt}
                link={"/dashboard/courses"}
              />
              <NavItem
                title="All Districts"
                icon={faUserAlt}
                link={"/dashboard/districts"}
              />
              <NavItem
                title="All Training Schools"
                icon={faBriefcase}
                link={"/dashboard/trainingSchools"}
              />
              {/* <NavItem
                title="Enrollment"
                icon={faBook}
                link={Routes.Enrollment.path}
              /> */}


              <Dropdown.Divider className="my-3 border-indigo" />

              <NavItem title="Settings" icon={faCog} link={"/dashboard"} />

              {/* <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
            
              </CollapsableNavItem> */}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};

export default Sidebar;

/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import {
  Dashboard,
  Trainings,
  Contacts,
  Login,
  NotFound,
  FormTraining,
  FormCourses,
  FormContact,
  Addproject,
  EditEntry,
  Districts,
  Courses,
} from "./pages/index";
import { Routes } from "./routes";
import { useStateValue } from "./ContextAPI/StateProvider";
import { useEffect, useState } from "react";
import { getContacts } from "./service/AddContactservice";
require("dotenv").config();

function App() {
  const [{ courses }, dispatch] = useStateValue();
//   const [data, setData] = useState()
//   console.log(data);
  
// useEffect(() => {
//   getContacts()
//   .then(infoData => setData(infoData))
// console.log(getContacts());
// }, [])



  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Switch>
            <Route exact path={Routes.Login.path} component={Login} />
            <ProtectedRoute
              exact
              path={Routes.Dashboard.path}
              component={Dashboard}
            />
            <ProtectedRoute
              exact
              path={Routes.Contacts.path}
              component={Contacts}
            />
            <ProtectedRoute
              exact
              path={Routes.Courses.path}
              component={Courses}
            />
            
            <ProtectedRoute
              exact
              path={Routes.Trainings.path}
              component={Trainings}
            />
            <ProtectedRoute
              exact
              path={Routes.FormContact.path}
              component={FormContact}
            />
            <ProtectedRoute
              exact
              path={Routes.FormCourses.path}
              component={FormCourses}
            />
            <ProtectedRoute
              exact
              path={Routes.FormTraining.path}
              component={FormTraining}
            />
            <ProtectedRoute
              exact
              path={Routes.Addproject.path}
              component={Addproject}
            />
            <ProtectedRoute
              exact
              path={`${Routes.EditEntry.path}/:id`}
              component={EditEntry}
            />
            <ProtectedRoute
              exact
              path={Routes.Districts.path}
              component={Districts}
            />
            {/* <ProtectedRoute
            exact
            path={`${Routes.EnrollmentStudent.path}/:id`}
            component={EnrollmentStudent}
          /> */}
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

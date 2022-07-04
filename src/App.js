/* eslint-disable no-unused-vars */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import {
  Dashboard,
  Contacts,
  Login,
  NewEntry,
  NotFound,
  UserList,
  Addproject,
  EditEvent,
  Enrollment,
  EnrollmentStudent,
} from "./pages/index";
import { Routes } from "./routes";
require("dotenv").config();

function App() {
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
            path={Routes.AddEvent.path}
            component={NewEntry}
          />
          <ProtectedRoute exact path={Routes.Contacts.path} component={Contacts} />
          <ProtectedRoute
            exact
            path={Routes.UserList.path}
            component={UserList}
          />
          <ProtectedRoute
            exact
            path={Routes.Addproject.path}
            component={Addproject}
          />
          <ProtectedRoute
            exact
            path={`${Routes.EditProject.path}/:id`}
            component={EditEvent}
          />
          <ProtectedRoute
            exact
            path={Routes.Enrollment.path}
            component={Enrollment}
          />
           <ProtectedRoute
            exact
            path={`${Routes.EnrollmentStudent.path}/:id`}
            component={EnrollmentStudent}
          />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="top-right" /> */}
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

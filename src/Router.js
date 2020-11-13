import { Switch } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import SeekerProfile from "./pages/user/SeekerProfile";
import Signup from "./pages/user/Signup";
import Dashboard from "./admin/Dashboard";
import ViewJobs from "./admin/ViewJobs";
import JobDetail from "./admin/JobDetail";
import ViewJob from "./pages/ViewJob";
import UserDashboard from "./pages/user/Dashboard";
import ViewApplications from "./admin/ViewApplications";
import ViewSaved from "./pages/user/ViewSaved";

function Routing() {
  return (
    <div>
      <Route path='/' exact component={Home} />
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/update/profile' exact component={SeekerProfile} />
      <Route path='/dashboard' exact component={Dashboard} />

      {/* Admin routes */}
      <Route path='/dashboard/view-jobs' exact component={ViewJobs} />
      <Route path='/dashboard/job/:id' exact component={JobDetail} />
      <Route
        path='/dashboard/applications'
        exact
        component={ViewApplications}
      />
      {/* <Route path='/job/:id' exact component={ViewJob} /> */}

      {/* Index page */}
      <Route path='/job/view/:id' exact component={ViewJob} />

      {/* User Dashboard */}
      <Route path='/user/dashboard' component={UserDashboard} />
      <Route path='/user/viewsaved' component={ViewSaved} />
    </div>
  );
}

export default Routing;

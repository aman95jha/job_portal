import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/style/user_profile.css";

function LeftMenu() {
  return (
    <div className='admin-sidenav-left'>
      <div className='sidenav-item'>
        <Link to='/user/dashboard'>
          <div className='sidenav-nav'>
            <span>View Applied Jobs</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/user/viewsaved'>
          <div className='sidenav-nav'>
            <span>View Saved Jobs</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/user/dashboard'>
          <div className='sidenav-nav'>
            <span>Rejected Applications</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/user/dashboard'>
          <div className='sidenav-nav'>
            <span>Your Job Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LeftMenu;

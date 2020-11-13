import React from "react";
import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className='admin-sidenav-left'>
      <div className='sidenav-item'>
        <Link to='/'>
          <div className='sidenav-nav'>
            <span>View Applications</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/dashboard'>
          <div className='sidenav-nav'>
            <span>Add Job</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/dashboard/view-jobs'>
          <div className='sidenav-nav'>
            <span>View Jobs</span>
          </div>
        </Link>
      </div>
      <div className='sidenav-item'>
        <Link to='/'>
          <div className='sidenav-nav'>
            <span>View JobSeekers</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LeftMenu;

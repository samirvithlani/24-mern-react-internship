import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const serviceProviderLinks = [
    {
      name: "Dashboard",

      link: "/netflix/home",
    },
    {
      name: "Add service",

      link: "/serviceprovider/addservice",
    },
  ];

  const userLinks = [
    {
      name: "Dashboard",
      link: "/netflix/home",
    },
    {
      name: "Tables",
      link: "/netflix/tables",
    },
  ];

  const path = window.location.pathname;

  return (
    <aside
      className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ps"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        />
        <Link className="navbar-brand m-0" to="/netflix/home">
          <img
            src="./assets/img/logo-ct-dark.png"
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">Argon Dashboard 2</span>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto ps ps--active-y"
        id="sidenav-collapse-main"
      >
        {path.includes("serviceprovider")
          ? serviceProviderLinks.map((servicePro) => {
              return (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to={servicePro.link}>
                      <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                      </div>
                      <span className="nav-link-text ms-1">
                        {servicePro.name}
                      </span>
                    </Link>
                  </li>
                </ul>
              );
            })
          : userLinks.map((user) => {
              return (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" to={user.link}>
                      <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                      </div>
                      <span className="nav-link-text ms-1">{user.name}</span>
                    </Link>
                  </li>
                </ul>
              );
            })}

        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
          <div
            className="ps__thumb-x"
            tabIndex={0}
            style={{ left: 0, width: 0 }}
          />
        </div>
        <div className="ps__rail-y" style={{ top: 0, height: 366, right: 0 }}>
          <div
            className="ps__thumb-y"
            tabIndex={0}
            style={{ top: 0, height: 276 }}
          />
        </div>
      </div>
      <div className="sidenav-footer mx-3 ">
        <div className="card card-plain shadow-none" id="sidenavCard">
          <img
            className="w-50 mx-auto"
            src="./assets/img/illustrations/icon-documentation.svg"
            alt="sidebar_illustration"
          />
          <div className="card-body text-center p-3 w-100 pt-0">
            <div className="docs-info">
              <h6 className="mb-0">Need help?</h6>
              <p className="text-xs font-weight-bold mb-0">
                Please check our docs
              </p>
            </div>
          </div>
        </div>
        <a
          href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"
          target="_blank"
          className="btn btn-dark btn-sm w-100 mb-3"
        >
          Documentation
        </a>
        <a
          className="btn btn-primary btn-sm mb-0 w-100"
          href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree"
          type="button"
        >
          Upgrade to pro
        </a>
      </div>
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </aside>
  );
};

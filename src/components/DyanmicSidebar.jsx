import React from "react";
import { Link } from "react-router-dom";

export const DyanmicSidebar = () => {
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
      name: "Dashboard-1",
      link: "/netflix/home",
    },
    {
      name: "Tables",
      link: "/netflix/tables",
    },
  ];
  const path = window.location.pathname;

  return (
    <div>
      {path.includes("serviceprovider")
        ? serviceProviderLinks.map((servicepro) => {
            return (
              <ul>
                <li>
                  <Link to={servicepro.link}>
                    <li>{servicepro.name}</li>
                  </Link>
                </li>
              </ul>
            );
          })
        : userLinks.map((user) => {
            return (
              <ul>
                <li>
                  <Link to={user.link}>
                    <li>{user.name}</li>
                  </Link>
                </li>
              </ul>
            );
          })}
    </div>
  );
};

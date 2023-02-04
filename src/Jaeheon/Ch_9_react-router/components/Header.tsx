import React from "react";
import { Link, useLocation } from "react-router-dom";

type HeaderPropsType = {};

type LinkItem = {
  name: string;
  to: string;
};

const Header = ({}: HeaderPropsType) => {
  const { pathname } = useLocation();
  const links: LinkItem[] = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Members", to: "/members" },
    { name: "Songs", to: "/songs" },
  ];

  return (
    <div className="card bg-light">
      <div className="card-heading">
        <h2 className="text-center m-3">New Jeans</h2>
        <p>
          <a href="https://newjeans.kr/" target="_blank">
            https://newjeans.kr/
          </a>
        </p>
        <div className="row">
          <div className="col-12">
            {links.map((link) => {
              const cn =
                "btn btn-primary menu" +
                ("/" + pathname.split("/")[1] === link.to ? " active" : "");
              return (
                <Link className={cn} key={link.name} to={link.to}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
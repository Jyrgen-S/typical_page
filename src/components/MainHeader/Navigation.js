import React from "react";
import "./Navigation.css";
import Button from "../UI/Button";

import AuthContext from "../../Store/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <nav className="nav">
          <ul>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/admin">Admin</a>
            </li>
            {props.loggedIn && (
              <li>
                <Button onClick={context.onLogout}>Log out</Button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </AuthContext.Consumer>
  );
};

export default Navigation;

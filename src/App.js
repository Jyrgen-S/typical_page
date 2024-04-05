import React, { Fragment, useState, useEffect } from "react";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";

import AuthContext from "./Store/auth-context";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedUserData = JSON.parse(
      localStorage.getItem("isLoggedUser")
    );
    return storedLoggedUserData ? storedLoggedUserData.isLogged : false;
  });

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(
      localStorage.getItem("isLoggedUser")
    );
    if (storedLoggedUserData && storedLoggedUserData.isLogged) {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = (user, password) => {
    localStorage.setItem(
      "isLoggedUser",
      JSON.stringify({
        username: user,
        isLogged: true,
      })
    );
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedUser");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        onLogout: logoutHandler,
      }}
    >
      <Fragment>
        <MainHeader />
        <main>
          {!loggedIn && <Login onLogin={loginHandler} />}
          {loggedIn && <Home />}
        </main>
      </Fragment>
    </AuthContext.Provider>
  );
}

export default App;

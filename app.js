import React from 'react';
import ReactDOM from 'react-dom/client';

// Get the root element where the React app will be rendered
const rootReact = document.getElementById("root");
const rootdom = ReactDOM.createRoot(rootReact);

// Define the AppComponent
const AppComponent = function () {
  return (
    <>
      <div className="header-div">
        <div className="logo-div">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
            alt="Restaurant logo"
          />
        </div>
        <div className="menu-div">
          <img
            className="logo"
            src="https://cdn5.vectorstock.com/i/1000x1000/66/09/logo-restaurant-menu-vector-37216609.jpg"
            alt="Restaurant Menu"
          />
        </div>
      </div>
      <h1>Welcome to the restaurant</h1>
      <p>Body content here</p>
      <footer>Footer content here</footer>

    </>
  );
        const HeaderComponent = function () {
    return (
        <>
              <div className="header">
                  <Logo />

                <menu />
            </div>
        </>
    )
  

  const ReactElement = React.createElement("div",
    { className: "title" },
    React.createElement("h1", null, "H1"),
    React.createElement("h2", null, "H2"),
    React.createElement("h3", null, "H3")
};

// Render the AppComponent to the root element
rootdom.render(<AppComponent />);

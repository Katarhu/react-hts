import React from "react";


const Home = () => <h1>Home</h1>;
const FAQ = () => <h1>FAQ</h1>;
const NotFound = () => <h1>NotFound</h1>;

  const RouterContext = React.createContext();

const Router = ({children}) => {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  const handleNavClick = (event) => {
    event.preventDefault();
    window.history.pushState(null, null, event.target.href);
    setPathname(window.location.pathname);
  };

  React.useEffect(() => {
    window.addEventListener("popstate", () => setPathname(window.location.pathname));
  });

  return (
    <RouterContext.Provider value={{location: window.location, handleNavClick}}>
      {children}
    </RouterContext.Provider>
  );
};

const Route = ({exact, path, Component}) => (
  <RouterContext.Consumer>
    {
      context => {
        if (exact ? path === context.location.pathname : context.location.pathname.startsWith(path)) {
          return <Component/>
        }

        return null;
      }
    }
  </RouterContext.Consumer>
);

const Link = ({to, children}) => (
  <RouterContext.Consumer>
    {
      context => (
        <a href={to} onClick={context.handleNavClick}>{children}</a>
      )
    }
  </RouterContext.Consumer>
);

export const CustomRoutingContent = () => {

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>

      <div>
        <Route exact path="/" Component={Home}/>
        <Route path="/faq" Component={FAQ}/>
      </div>
    </div>
  );
};

export const CustomRouting = () => (
  <Router>
    <RouterContext.Consumer>
      {
        (context) => <CustomRoutingContent context={context}/>
      }
    </RouterContext.Consumer>
  </Router>
);

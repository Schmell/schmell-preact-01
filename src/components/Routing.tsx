import { FunctionalComponent, h } from "preact";
import Router, { Route } from "preact-router";
import Home from "../routes/home";
import New from "../routes/new";
import NotFoundPage from "../routes/notfound";
import Results from "../routes/results";
import Scoring from "../routes/Scoring";
import { RaceProperties } from "../routes/scoring/RaceProperties";
import { RacesList } from "../routes/scoring/RacesList";
import Upload from "../routes/upload";
import { AuthRoute } from "../util/AuthenticatedRoute ";
import { SignIn } from "./SignIn";

interface IRouting {
  [x: string | number]: any;
}

const Routing: FunctionalComponent<IRouting> = (props) => {
  // console.log(props);
  return (
    <Router>
      <Route path="/" component={Home} {...props} />

      <Route path="/signin" component={SignIn} {...props} />

      <AuthRoute path="/upload" component={Upload} {...props} />

      <Route path="/results" component={Results} {...props} />

      <AuthRoute path="/scoring" component={Scoring} {...props} />

      <AuthRoute
        path="/race-properties"
        component={RaceProperties}
        {...props}
      />

      <AuthRoute path="/races" component={RacesList} {...props} />

      <NotFoundPage default />
    </Router>
  );
};
export default Routing;

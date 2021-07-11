import PublicRoute from "Components/PublicRoute/PublicRoute";
import { Route, Switch } from "react-router";
import CreateMeetingView from "views/CreateMeeting/CreateMeetingView";
import TimetableView from "views/Timetable/TimetableView";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TimetableView} />
        <PublicRoute
          path="/create-meeting"
          restricted
          redirectTo="/"
          component={CreateMeetingView}
        />
      </Switch>
    </div>
  );
}

export default App;

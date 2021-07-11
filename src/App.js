import { Route, Switch } from "react-router";
import CreateMeetingView from "views/CreateMeeting/CreateMeetingView";
import TimetableView from "views/Timetable/TimetableView";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TimetableView} />
        <Route path="/create-meeting" exact component={CreateMeetingView} />
      </Switch>
    </div>
  );
}

export default App;

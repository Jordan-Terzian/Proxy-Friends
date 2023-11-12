import Main from "./navigation/main";
import { setupUserAndActivities } from "./testing/setupData";

const App = () => {
  setupUserAndActivities();
  return <Main />;
};

export default App;

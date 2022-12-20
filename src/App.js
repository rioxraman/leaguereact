import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { usePlayerContext } from "./context/playerContext";

const App = () => {
  const { page } = usePlayerContext();

  if (page === 1) return <Page1 />;
  if (page === 2) return <Page2 />;
};
export default App;

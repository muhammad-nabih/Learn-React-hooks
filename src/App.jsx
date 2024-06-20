import Memo from "./hooks/Memo/Memo";
import UseCallback from "./hooks/Callback/Callback";
import DataDisplay from "./hooks/CustomHooks/DataFetch/DataDisplay";

function App() {
  return (
    <>
      {/* <UseCallback /> */}

      <DataDisplay endpoint={"https://jsonplaceholder.typicode.com/users"} />
    </>
  );
}

export default App;

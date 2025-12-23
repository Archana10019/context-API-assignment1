import AppContextProvider from "./context/AppContext";
import Component2 from "./components/Component2";

const App = () => {
  return (
    <AppContextProvider>
      <h2>Context API Example</h2>
      <Component2 />
    </AppContextProvider>
  );
};

export default App;

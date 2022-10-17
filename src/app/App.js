import AppContextProvider from "./contexts/AppContext/AppContextProvider";
import "./global-styles.css";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <AppContextProvider>
    <AppRouter/> 
    </AppContextProvider>
  );
}

export default App;

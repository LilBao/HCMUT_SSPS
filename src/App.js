import { Routes, Route } from "react-router-dom";
import { publicRoute } from "./routes";
function App() {
  return (
    <Routes>
      {publicRoute.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";

import RootLayout from "./_root/RootLayout";
import HomePage from "./_root/homePage/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

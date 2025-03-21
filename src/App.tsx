import { Route, Routes } from "react-router";

import RootLayout from "./_root/RootLayout";
import HomePage from "./_root/homePage/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 md:px-8">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

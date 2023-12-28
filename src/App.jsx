import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsersList } from "./pages/Home/UsersList";
import UsersDetails from "./pages/Details/UsersDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/JS15-react" element={<UsersList />} />
            <Route
              path="/JS15-react/details/:userId"
              element={<UsersDetails />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

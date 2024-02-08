import { Routes, Route } from "react-router-dom";
import { Layout, Menu } from "antd";

import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Profile from "./pages/User/Profile";
import Navbar from "./components/Navbar";

import "./App.css";

const { Header } = Layout;
const items = [
  {
    key: 0,
    label: "Home",
  },
  {
    key: 1,
    label: "Pricing",
  },
  {
    key: 2,
    label: "Register",
  },
  {
    key: 3,
    label: "Login",
  },
];

function App() {
  return (
    <>
      {/* <Layout> */}
      <Navbar />
      {/* <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header> */}
      {/* </Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="user" element={<Profile />}>
          <Route path="profile" element={<Profile />} />
          {/* <Route path="account" element={<Account />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;


// import components
import Header from "../../components/Header";
import TopBar from "./TopBar";
import Content from "./Content";
import { useState } from "react";

const Dashboard = () => {

  const [searchKey, setSearchKey] = useState("");
  const [filterKey, setFilterKey] = useState("");
  const [orderKey, setOrderKey] = useState("id");

  return (
    <div>
      <Header name="Dashboard" />
      <TopBar setSearchKey={setSearchKey} setFilterKey={setFilterKey} setOrderKey={setOrderKey} />
      <Content searchKey={searchKey} filterKey={filterKey} orderKey={orderKey} />
    </div>
  );
};

export default Dashboard;

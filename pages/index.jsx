import styles from "../styles/Home.module.css";
import Datatable from "../components/Datatable";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <div className={styles.container}>
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
        rel="stylesheet"
      />
      <div>
        <Card color="primary">Primary Card</Card>
        <Card color="secondary">Secondary Card</Card>
        <Card color="success">Success Card</Card>
        <Card color="danger">Danger Card</Card>
      </div>
      <Datatable></Datatable>
      {/* <Chart></Chart> */}
    </div>
  );
};

export default Home;

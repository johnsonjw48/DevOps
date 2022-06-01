import styles from "../styles/Home.module.css";
import Datatable from "../components/Datatable";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Box from "@mui/material/Box";
import { data, data2, options } from "../assets/utils";

const Home = () => {
  return (
    <div className={styles.container}>
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
        rel="stylesheet"
      />
      <div className="row">
        <Card color="primary">Primary Card</Card>
        <Card color="secondary">Secondary Card</Card>
        <Card color="success">Success Card</Card>
        <Card color="danger">Danger Card</Card>
      </div>

      <div>
        <Chart
          chartData={data}
          options={options}
          barData={data2}
          barOptions={options}
        />
      </div>

      <Datatable></Datatable>
      {/* <Chart></Chart> */}
    </div>
  );
};

export default Home;

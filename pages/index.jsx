import styles from "../styles/Home.module.css";
import Datatable from "../components/Datatable";
import Card from "../components/Card";
import {useEffect} from "react";

const Home = () => {


  return (
    <div className={styles.container}>
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css"
        rel="stylesheet"
      />
      <Card color="success">Success Card</Card>
      <Datatable></Datatable>
    </div>
  );
};

export default Home;

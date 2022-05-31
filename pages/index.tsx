import type { NextPage } from "next";

import Chart from "../components/Chart";
import styles from "../styles/Home.module.css";
import { data, options, data2, options2 } from "../assets/utils";

const Home: NextPage = () => {
  return (
    <div>
      <Chart
        chartData={data}
        options={options}
        barData={data2}
        barOptions={options}
      />
    </div>
  );
};

export default Home;

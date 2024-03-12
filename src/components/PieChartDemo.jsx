import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
} from "chart.js";
import axios from "axios";
Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(BarElement);

export const PieChartDemo = () => {
  const [products, setproducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/products/product");
      console.log("products", res.data.data);
      if (res.data.data && res.data.data.length > 0) {
        const transformedData = {
          labels: res.data.data.map((product) => product.category.name),
          datasets: [
            {
              label: "Products",
              data: res.data.data.map((product) => product.price),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        };
        setdata(transformedData);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

 
  const [data, setdata] = useState({
    //labels: courses.map((course) => course.name),
    labels: [],
    datasets: [],
  });
  return (
    <div>
      <h1>PIE CHART DEMO</h1>

      <div style={{ height: 500, width: 500 }}>
        {/* <Pie data={data}/> */}
        <Bar data={data} />
      </div>
    </div>
  );
};

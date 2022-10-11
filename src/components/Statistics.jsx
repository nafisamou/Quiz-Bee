import { render } from "@testing-library/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "React",
      total: 8,
      id: 1,
    },
    {
      name: "JavaScript",
      total: 9,
      id: 2,
    },
    {
      name: "CSS",
      total: 8,
      id: 3,
    },
    {
      name: "Git",
      total: 11,
      id: 4,
    },
  ];

  render()
  
    return (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="id"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="name" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  
  
};

export default Statistics;

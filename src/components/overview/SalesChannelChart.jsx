import { motion } from "framer-motion";
// import { BarChart } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS, SALES_CHANNEL_DATA } from "../../data/data";

const SalesChannelChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mt-8"
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={SALES_CHANNEL_DATA}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.5)",
                border: "1px solid #d3d3d3",
              }}
              itemStyle={{ color: "white" }}
            />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {SALES_CHANNEL_DATA.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesChannelChart;

import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import SalesChannelChart from "../components/overview/SalesChannelChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesOVerViewChart from "../components/overview/SalesOVerViewChart";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Products" />

      <main className="container mx-auto py-6 px-4 lg:px-8">
        {/* stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <StatCard
            name="Total Sales"
            icon={Package}
            value="$12,345"
            color="#6366f1"
          />
          <StatCard
            name="New Users"
            icon={TrendingUp}
            value="1234"
            color="#8b5cf6"
          />
          <StatCard
            name="Total Product"
            icon={AlertTriangle}
            value="567"
            color="#ec4899"
          />
          <StatCard
            name="Coversion Rate"
            icon={DollarSign}
            value="12.5%"
            color="#10b981"
          />
        </motion.div>

        <ProductTable />

        {/* charts    */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOVerViewChart />
          <CategoryDistributionChart />
        </div>
        {/* <SalesChannelChart /> */}
      </main>
    </div>
  );
};

export default ProductsPage;

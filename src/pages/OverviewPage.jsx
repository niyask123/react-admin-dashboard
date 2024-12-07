import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOVerViewChart from "../components/overview/SalesOVerViewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10 ">
        <Header title="overview" />

        <main className=" container mx-auto py-6 px-4 lg:px-8">
          {/* stats */}
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <StatCard
              name="Total Sales"
              icon={Zap}
              value="$12,345"
              color="#6366f1"
            />
            <StatCard
              name="New Users"
              icon={Users}
              value="1234"
              color="#8b5cf6"
            />
            <StatCard
              name="Total Product"
              icon={ShoppingBag}
              value="567"
              color="#ec4899"
            />
            <StatCard
              name="Coversion Rate"
              icon={BarChart2}
              value="12.5%"
              color="#10b981"
            />
          </motion.div>

          {/* chatrs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SalesOVerViewChart />
            <CategoryDistributionChart />
          </div>
          <SalesChannelChart />
        </main>
      </div>
    </>
  );
};

export default OverviewPage;

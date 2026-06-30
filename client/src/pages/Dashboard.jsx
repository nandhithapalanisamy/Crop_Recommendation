import React from "react";

// Dashboard Components
import HeroBanner from "../components/dashboard/HeroBanner";
import StatsCards from "../components/dashboard/StatsCards";
import LiveClock from "../components/dashboard/LiveClock";
import WeatherSummary from "../components/dashboard/WeatherSummary";
import CropSpotlight from "../components/dashboard/CropSpotlight";
import IndiaCropMap from "../components/dashboard/IndiaCropMap";
import AgricultureNews from "../components/dashboard/AgricultureNews";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import TemperatureChart from "../components/dashboard/TemperatureChart";
import RainfallChart from "../components/dashboard/RainfallChart";
import SoilChart from "../components/dashboard/SoilChart";
import SeasonChart from "../components/dashboard/SeasonChart";
import ProfitChart from "../components/dashboard/ProfitChart";
import TopCropChart from "../components/dashboard/TopCropChart";
import TopCropTable from "../components/dashboard/TopCropTable";
import TemperatureTable from "../components/dashboard/TemperatureTable";
import SoilTable from "../components/dashboard/SoilTable";
import CropCategories from "../components/dashboard/CropCategories";
import AIInsights from "../components/dashboard/AIInsights";
import DashboardSummary from "../components/dashboard/DashboardSummary";
import QuoteCard from "../components/dashboard/QuoteCard";
import DashboardFooter from "../components/dashboard/DashboardFooter";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-slate-100 to-emerald-50">

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Hero Banner */}
        <HeroBanner />

        {/* Statistics */}
        <StatsCards />

        {/* Live Information */}
        <div className="grid lg:grid-cols-2 gap-6">
          <LiveClock />
          <WeatherSummary />
        </div>

        {/* Crop Spotlight */}
        <CropSpotlight />

        {/* Categories */}
        <CropCategories />

        {/* India Agriculture */}
        <IndiaCropMap />

        {/* Agriculture News */}
        <AgricultureNews />

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">

          <TopCropChart />

          <CategoryPieChart />

          <TemperatureChart />

          <RainfallChart />

          <SoilChart />

          <ProfitChart />

        </div>

        {/* Seasonal Calendar */}
        <SeasonChart />

        {/* Recommendation Tables */}
        <TopCropTable />

        <TemperatureTable />

        <SoilTable />

        {/* AI Insights */}
        <AIInsights />

        {/* Dashboard Summary */}
        <DashboardSummary />

        {/* Quote */}
        <QuoteCard />

        {/* Footer */}
        <DashboardFooter />

      </div>

    </div>
  );
}
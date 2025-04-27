
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { AuraComposition } from "@/types/aura";

type AuraChartProps = {
  auraComposition: AuraComposition;
  chartType?: 'pie' | 'radar';
};

const AuraChart: React.FC<AuraChartProps> = ({ auraComposition, chartType = 'pie' }) => {
  // Define colors for each aura category
  const COLORS = {
    Calmness: "#A2D5F2", // Light blue
    Energy: "#FFB347", // Orange
    Anxiety: "#95A5A6", // Grey
    Confidence: "#F1C40F", // Gold
    Love: "#FF6F91", // Pink
    Wisdom: "#8A2BE2", // Purple
    Creativity: "#FFA07A", // Light salmon
    Intuition: "#9370DB", // Medium purple
    Healing: "#77DD77" // Light green
  };

  // Prepare data for the charts
  const data = Object.entries(auraComposition)
    .filter(([_, value]) => value !== undefined && value > 0)
    .map(([name, value]) => ({
      name,
      value: value || 0
    }));

  // Custom tooltip for both chart types
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow-md border border-gray-100">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'pie' ? (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.name as keyof typeof COLORS] || "#999999"} 
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        ) : (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Aura Bloom"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default AuraChart;

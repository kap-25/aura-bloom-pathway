
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { AuraComposition } from "@/types/aura";

type AuraChartProps = {
  auraComposition: AuraComposition;
};

const AuraChart: React.FC<AuraChartProps> = ({ auraComposition }) => {
  // Prepare data for the chart
  const data = Object.entries(auraComposition).map(([name, value]) => ({
    name,
    value
  }));

  // Define colors for each aura category
  const COLORS = {
    Calmness: "#A2D5F2", // Light blue
    Energy: "#FFB347", // Orange
    Anxiety: "#95A5A6", // Grey
    Confidence: "#F1C40F", // Gold
    Love: "#FF6F91" // Pink
  };

  // Custom tooltip to format the display of percentages
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
                fill={COLORS[entry.name as keyof typeof COLORS]} 
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AuraChart;

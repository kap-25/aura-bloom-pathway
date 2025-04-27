
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { AuraComposition } from "@/types/aura";

type AuraChartProps = {
  auraComposition: AuraComposition;
  chartType?: 'pie' | 'radar';
};

const AuraChart: React.FC<AuraChartProps> = ({ auraComposition, chartType = 'radar' }) => {
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
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/20">
          <p className="font-medium text-spiritual-primary">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px] relative group">
      <div className="absolute inset-0 bg-gradient-celestial rounded-2xl opacity-20" />
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
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        ) : (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#E5DEFF" />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fill: '#7E69AB', fontSize: 12 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Aura Bloom"
              dataKey="value"
              stroke="#9b87f5"
              fill="#9b87f5"
              fillOpacity={0.4}
              className="transition-all duration-300 hover:fill-opacity-60"
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default AuraChart;

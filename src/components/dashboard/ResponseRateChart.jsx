import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { responseRateData } from '../../constans';

// Reusing the DashboardCard for consistent styling
const DashboardCard = ({ title, children }) => (
    <div className="bg-white p-6 rate_success ">
        <h2 className="dashboard_overtime_rate_heading">{title}</h2>
        {children}
    </div>
);


// Custom Label component to position text outside the donut
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value, color }) => {
    const RADIAN = Math.PI / 180;
    // Calculate position for the line and text
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Position for the label text (slightly further out for better readability)
    const textX = cx + (outerRadius + 20) * Math.cos(-midAngle * RADIAN);
    const textY = cy + (outerRadius + 20) * Math.sin(-midAngle * RADIAN);

    // Determine line start and end points
    const lineStartX = cx + (outerRadius - 5) * Math.cos(-midAngle * RADIAN);
    const lineStartY = cy + (outerRadius - 5) * Math.sin(-midAngle * RADIAN);
    const lineEndX = cx + (outerRadius + 15) * Math.cos(-midAngle * RADIAN);
    const lineEndY = cy + (outerRadius + 15) * Math.sin(-midAngle * RADIAN);

    // Align text
    const textAnchor = textX > cx ? 'start' : 'end';

    return (
        <g>
            {/* Line connecting the arc to the label, only for "Success" and "Failed" as per image */}
            {name === 'Success' || name === 'Failed' ? (
                <>
                    <path d={`M${lineStartX},${lineStartY}L${lineEndX},${lineEndY}`} stroke={color} fill="none" />
                    <circle cx={lineEndX} cy={lineEndY} r={3} fill={color} stroke="none" />
                </>
            ) : null}

            {/* Label text */}
            <text
                x={textX + (textAnchor === 'start' ? 5 : -5)} // Small offset from line end
                y={textY}
                fill="#333"
                textAnchor={textAnchor}
                dominantBaseline="central"
                className="text-sm font-medium" // Tailwind equivalent for text size/weight
            >
                {`${name} ${value}%`}
            </text>
        </g>
    );
};


const ResponseRateChart = () => {
    return (
        <DashboardCard title="Response Rate Success">
            <div className="flex flex-col items-center justify-center -mt-4"> {/* Adjust margin-top to center */}
                <ResponsiveContainer width="100%" height={324}> {/* Adjust height as needed */}
                    <PieChart>
                        <Pie
                            data={responseRateData}
                            cx="50%" // Center X
                            cy="50%" // Center Y
                            innerRadius={70} // Inner radius for donut hole
                            outerRadius={90} // Outer radius for donut
                            fill="#8884d8" // Default fill, overridden by Cell
                            paddingAngle={5} // Gap between slices, like in the image
                            dataKey="value"
                            label={renderCustomizedLabel} // Our custom label component
                            labelLine={false} // Hide default label lines
                        >
                            {responseRateData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Custom Legend using Tailwind CSS */}
                <div className="flex justify-center gap-6 mt-4"> {/* Space below chart, gap between legend items */}
                    {responseRateData.map((entry, index) => (
                        <div key={`legend-${index}`} className="flex items-center">
                            <span
                                className="inline-block w-4 h-4 rounded-sm mr-2"
                                style={{ backgroundColor: entry.color }}
                            ></span>
                            <span className="text-sm text-gray-700">{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardCard>
    );
};

export default ResponseRateChart;
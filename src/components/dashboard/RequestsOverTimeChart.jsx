import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, // Critical for modern dashboards
} from 'recharts';
import { chartData } from '../../constans';

// Reusable Tailwind Card Component for consistency
const DashboardCard = ({ title, children }) => (
    <div className="dashboard_overtime max-h-[420px]">
        <h2 className="dashboard_overtime_rate_heading">{title}</h2>
        {children}
    </div>
);

const RequestsOverTimeChart = () => {
    return (
        // Step 3: Use the DashboardCard
        <DashboardCard title="Requests Over Time">
            {/* Use ResponsiveContainer to ensure the chart scales well */}
            <ResponsiveContainer width="100%" height={320}>
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                    {/* Custom Grid for a cleaner look, mimicking the image */}
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f0f0f0" // Very light gray line
                        vertical={false} // Only horizontal lines, like the image
                    />

                    {/* X-Axis for Months */}
                    <XAxis
                        dataKey="name"
                        axisLine={false} // Hide the axis line
                        tickLine={false} // Hide the tick mark line
                        padding={{ left: 10, right: 10 }}
                        style={{ fontSize: '12px' }} // Tailwind's text-xs equivalent
                    />

                    {/* Y-Axis for Requests */}
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 100]} // Set a fixed max like the image (0, 25, 50, 75, 100)
                        ticks={[0, 25, 50, 75, 100]} // Explicit ticks
                        style={{ fontSize: '12px' }}
                    />

                    {/* Tooltip on Hover (Optional but highly recommended) */}
                    <Tooltip />

                    {/* The Main Line Configuration */}
                    <Line
                        type="monotone" // This gives the smooth, curved line ("monotone" or "natural")
                        dataKey="requests"
                        stroke="#ffc107" // Yellow/Amber color (You might need to adjust the hex to match exactly)
                        strokeWidth={3} // Thicker line
                        dot={{ r: 5, fill: '#ffc107', stroke: '#ffc107', strokeWidth: 2 }} // The large solid dots
                        activeDot={{ r: 8, fill: '#fff', stroke: '#ffc107', strokeWidth: 2 }} // Dot style when hovering
                    />
                </LineChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
};

export default RequestsOverTimeChart;
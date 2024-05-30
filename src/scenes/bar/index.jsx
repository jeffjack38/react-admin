import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

//Bar functional component return Header and BarChart
const Bar = () => {
  return (
    <Box m="20px">
      {/* title and subtitle props */}
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />

      {/* Box for BarChart */}
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
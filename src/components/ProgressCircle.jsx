import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";


//ProgressCircle component accept two props: progress and size
const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    //returned Box component that defines a radial and conic gradient background,
    //radial gradient used to create a circular progress bar
    //conic gradient is used to fill in the progress
    //angle used in the conic gradient to determin how much of the circle to fill in
    //based on progress prop
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
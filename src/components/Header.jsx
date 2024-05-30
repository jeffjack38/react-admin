import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

//Header functional component that takes title, subtitle as props,
//useTheme() hook to get current theme, tokens function gets the color,
//tokens for the current theme mode, returns Box component
const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //return box component with typography components that title prop
  //and subtitle prop
  return (
    <Box mb="30px">
      <Typography
        varient="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
        </Typography>
    </Box>
  );
};

export default Header;
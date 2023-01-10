import { Box } from "@mui/material";

const MuiResponsive = () => {
  return (
    <Box
      // --- sx represent style
      sx={{
        marginTop: "1rem",
        height: "10rem",
        width: { xs: "20rem", sm: "30rem", md: "40 rem", lg: "50rem" },
        bgcolor: "primary.main",
      }}
    />
  );
};

export default MuiResponsive;

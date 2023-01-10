import { Box } from "@mui/material";

const MuiResponsive = () => {
  return (
    <Box
      // --- sx represent style
      sx={{
        marginTop: "1rem",
        height: "10rem",
        width: {
          xs: "20rem", // apply when viewport is > 0 
          sm: "30rem", // apply when viewport is >= 600px
          md: "40rem",// apply when viewport is >= 900px
          lg: "50rem", // apply when viewport is >= 1200px
          xl: "60rem", // apply when viewport is >= 1536px
        },
        bgcolor: "primary.main",
      }}
    />
  );
};

export default MuiResponsive;

import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

interface LoaderProps {
  text?: string; // Optional text to display with the loader
}

const Loader: React.FC<LoaderProps> = ({ text = "Loading..." }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <CircularProgress color="primary" />
      {text && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;

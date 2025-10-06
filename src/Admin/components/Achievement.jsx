import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

const TrophyImg = styled("img")({
  right: 30,
  bottom: 10,
  height: 150,
  position: "absolute",
});

const Achievement = () => {
  return (
    <Card
      className="border border-gray-300 h-[12rem] "
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top Section */}
        <div>
          <Typography variant="h5" sx={{ letterSpacing: "1.2px" }}>
            Ecommerce
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Congratulations 🎉
          </Typography>
          <Typography variant="h5" sx={{ my: 2.5, fontWeight: "bold" }}>
            420.8K
          </Typography>
          <Button size="small" variant="contained">
            View Sales
          </Button>
        </div>

        {/* Trophy Image */}
        <TrophyImg src="/trophy.png" alt="Trophy" />
      </CardContent>
    </Card>
  );
};

export default Achievement;

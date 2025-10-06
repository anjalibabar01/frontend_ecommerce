import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const salesData = [
  {
    stats: "245K",
    title: "Sales",
    color: "primary.main",
    icon: <AutoAwesomeIcon sx={{ fontSize: "1.25rem" }} />,
  },
  {
    stats: "12.5K",
    title: "Customers",
    color: "success.main",
    icon: <AutoAwesomeIcon sx={{ fontSize: "1.25rem" }} />,
  },
  {
    stats: "1.54K",
    title: "Products",
    color: "warning.main",
    icon: <AutoAwesomeIcon sx={{ fontSize: "1.25rem" }} />,
  },
  {
    stats: "88K",
    title: "Revenue",
    color: "info.main",
    icon: <AutoAwesomeIcon sx={{ fontSize: "1.25rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <div
      key={index}
      style={{
        flex: "1 1 25%", // 4 columns
        minWidth: "200px", // responsive fallback
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Avatar
        variant="rounded"
        sx={{
          mr: 3,
          width: 44,
          height: 44,
          boxShadow: 3,
          color: "white",
          backgroundColor: item.color,
        }}
      >
        {item.icon}
      </Avatar>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="caption">{item.title}</Typography>
        <Typography variant="h6">{item.stats}</Typography>
      </Box>
    </div>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card className="border border-gray-300" sx={{ borderRadius: "10px" }}>
      <CardHeader
        className="mt-2"
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Total 48% Growth 📈
            </Box>{" "}
            This Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "1rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />

      <CardContent sx={{ pt: (theme) => `${theme.spacing(0)} !important` }}>
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {salesData.map((item, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 25%", // exactly 25% each
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  mr: 2,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "white",
                  backgroundColor: item.color,
                }}
              >
                {item.icon}
              </Avatar>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2">{item.title}</Typography>
                <Typography variant="h5">{item.stats}</Typography>
              </Box>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;

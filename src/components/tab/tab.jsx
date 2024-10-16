import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material"; // Import necessary hooks and components

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme(); // Use MUI theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen width is less than 'sm' (mobile)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between", // Adjust layout based on screen size
          width: "100%",
          flexWrap: isMobile ? "wrap" : "nowrap", // Stack tabs vertically on small screens
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="responsive tabs example"
          orientation={isMobile ? "vertical" : "horizontal"} // Vertical tabs on mobile
          variant={isMobile ? "scrollable" : "fullWidth"} // Allow scrollable tabs on mobile
          sx={{
            width: isMobile ? "100%" : "100%", // Adjust width for responsiveness
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tab
            label="Характеристики"
            {...a11yProps(0)}
            sx={{
              flex: 1,
              textAlign: "center",
              ":hover": {
                backgroundColor: "#618C78",
                color: "white",
              },
            }}
          />
          <Tab
            label="Купить в рассрочку"
            {...a11yProps(1)}
            sx={{
              flex: 1,
              textAlign: "center",
              ":hover": {
                backgroundColor: "#618C78",
                color: "white",
              },
            }}
          />
          <Tab
            label="Отзывы"
            {...a11yProps(2)}
            sx={{
              flex: 1,
              textAlign: "center",
              ":hover": {
                backgroundColor: "#618C78",
                color: "white",
              },
            }}
          />
          <Tab
            label="Написать отзыв"
            {...a11yProps(3)}
            sx={{
              flex: 1,
              textAlign: "center",
              ":hover": {
                backgroundColor: "#618C78",
                color: "white",
              },
              ":active": {
                backgroundColor: "#618C78",
                color: "white",
              },
            }}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Box sx={{ width: "100%", maxWidth: 400, margin: isMobile ? "0 auto" : "0" }}> {/* Center content on mobile */}
          <Grid container spacing={2}> {/* Use Grid for better layout control */}
            {[
              { label: "Материал", value: "Бамбук" },
              { label: "Толщина", value: "6 мм" },
              { label: "Вес", value: "1.6 кг/м² (+/- 1%)" },
              { label: "Плотность", value: "504 000 узлов/м²" },
              { label: "Производитель", value: "Yusuf Hali" },
              { label: "Страна", value: "Турция" },
            ].map((item, index) => (
              <Grid item xs={12} key={index}> {/* Each item takes full width on mobile */}
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderBottom="1px solid #ccc"
                  py={2}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {item.label}
                  </Typography>
                  <Typography variant="body1">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
        Купить в рассрочку
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Отзывы
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Написать отзыв
      </CustomTabPanel>
    </Box>
  );
}

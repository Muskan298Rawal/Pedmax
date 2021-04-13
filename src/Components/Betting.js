import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import "../App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Betting() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <AppBar position="static">
        <Tabs
          className="individual"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Betting slip" {...a11yProps(0)} />
          <Tab label="My bets" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="right_bar_1">
          <h6>
            <b>Select the odds to place bets</b>
          </h6>
          <hr />
          <select className=" select_right ">
            <option value="boi">Single Bet</option>
            <option value="sbi">Multi Bet</option>
          </select>
          <br />
          <br />
          <hr />
          <pre>Total Stake Total Return</pre>
          <hr />
          <Button className="btn_right mt-2 ml-4">Place Bet</Button>
        </div>
      </TabPanel>
      <TabPanel className="right_2" value={value} index={1}>
        <div className="ml-4">Please login to view this section</div>
      </TabPanel>
    </div>
  );
}

export default Betting;

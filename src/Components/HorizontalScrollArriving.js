import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import "../Center.css";
import ArrivingMatches from "./ArrivingMatches";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function HorizontalScrollArriving(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h6 className="mt-3 mb-2">Arriving</h6>
      <>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {props.games.map((data, index) => {
              return (
                <Tab key={data.id} label={data.name} {...a11yProps(index)} />
              );
            })}
          </Tabs>
        </AppBar>
        {props.games.map((data, index) => {
          return (
            <TabPanel value={value} index={index}>
              <ArrivingMatches index={data.id} />
            </TabPanel>
          );
        })}
      </>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
}

export default connect(mapStateToProps, null)(HorizontalScrollArriving);

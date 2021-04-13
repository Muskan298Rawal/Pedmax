import React, { useEffect, useState } from "react";
import "../Center.css";
import { connect } from "react-redux";
import { getTournament } from "../Store/Actions/ActionCreator";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, NavLink, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function SportsLink(props) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const url_data = useParams();

  useEffect(() => {
    props.getTournament(url_data.id);
  }, [url_data.id]);

  const handleClick = (data) => {
    setShow(!show);
    setId(data);
  };

  let myobj = {};

  props.tournaments.map((data) => {
    if (myobj[data.tournament.title]) {
      myobj[data.tournament.title].push(data);
    } else {
      myobj[data.tournament.title] = [data];
    }
  });

  const indexes = Object.keys(myobj);

  return props.tournaments.length > 0 ? (
    <div className="maintxt">
      <img src="https://www.pedmax.com/images/banner.jpg" alt="Pic" />
      <Breadcrumb className="breadcrumb">
        <BreadcrumbItem>
          <Link className="bread_link" to="/sports">
            Sports
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          {props.tournaments[0].sport.name}
        </BreadcrumbItem>
      </Breadcrumb>
      <div>{props.tournaments[0].sport.name}</div>
      {props.tournaments.length === 0 ? (
        <div className="tab_panel_2">No Upcoming Matches</div>
      ) : (
        <ul style={{ listStyle: "none" }} className="arr_match_ul">
          {indexes.map((data, index) => {
            const value = myobj[data];
            return (
              <>
                <li key={index} className="arr_matches">
                  <div>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid className="col-12 text-truncate" item xs={4}>
                        <NavLink
                          to={`/sports/${url_data.id}/${value[0].tournament.id}`}
                          className="link_list"
                        >
                          {data}
                        </NavLink>
                      </Grid>
                      <Grid item xs={2} className="text-center">
                        1
                      </Grid>
                      <Grid item xs={2} className="text-center">
                        X
                      </Grid>
                      <Grid item xs={2} className="text-center">
                        2
                      </Grid>
                      <Grid item xs={2} className="text-center">
                        <FontAwesomeIcon
                          onClick={() => handleClick(data)}
                          icon={faCaretDown}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </li>
                {id === data &&
                  show &&
                  value.map((element, index) => {
                    if (element?.tournament?.title === data) {
                      const temp = element?.main_markets[0]?.outcomes;
                      return (
                        <li key={index} className="arr_matches_li">
                          <div>
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              spacing={3}
                            >
                              <Grid item xs={4} className="text-left row">
                                {element.participants && (
                                  <>
                                    <div className="col-12 text-truncate">
                                      {element.participants[0]}
                                    </div>
                                    <div className="col-12 text-truncate">
                                      {element.participants[1]}
                                    </div>
                                  </>
                                )}
                              </Grid>
                              <Grid item xs={2} className="text-center">
                                {temp ? (
                                  <div className="btn_odds">
                                    {Object.keys(
                                      element?.main_markets[0]?.outcomes
                                    ).map((ele) => {
                                      if (temp[ele].name === "1") {
                                        return temp[ele].odds;
                                      }
                                    })}
                                  </div>
                                ) : (
                                  "--"
                                )}
                              </Grid>
                              <Grid item xs={2} className="text-center">
                                {temp ? (
                                  <div className="btn_odds">
                                    {Object.keys(
                                      element?.main_markets[0]?.outcomes
                                    ).map((ele) => {
                                      if (temp[ele].name === "X") {
                                        return temp[ele].odds;
                                      }
                                    })}
                                  </div>
                                ) : (
                                  "-"
                                )}
                              </Grid>
                              <Grid item xs={2} className="text-center">
                                {temp ? (
                                  <div className="btn_odds">
                                    {Object.keys(
                                      element?.main_markets[0]?.outcomes
                                    ).map((ele) => {
                                      if (temp[ele].name === "2") {
                                        return temp[ele].odds;
                                      }
                                    })}
                                  </div>
                                ) : (
                                  "--"
                                )}
                              </Grid>
                              <Grid item xs={2} className="text-center">
                                <b>
                                  {" "}
                                  <u>
                                    {"+"}
                                    {element.market_counts}
                                  </u>
                                  {<FontAwesomeIcon icon={faAngleRight} />}
                                </b>
                              </Grid>
                            </Grid>
                          </div>
                        </li>
                      );
                    }
                  })}
              </>
            );
          })}
        </ul>
      )}
    </div>
  ) : (
    <div>No tournaments Found</div>
  );
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournament,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournament: (id) => dispatch(getTournament(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsLink);

import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import "../Center.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import { getMatchDetail } from "../Store/Actions/ActionCreator";
import { connect } from "react-redux";

function TournamentLink(props) {
  const url_data = useParams();
  useEffect(() => {
    props.getMatchDetail(url_data.tou_id);
  }, [url_data.tou_id]);

  return props.match.length > 0 ? (
    <div>
      <Breadcrumb className="breadcrumbtou">
        <BreadcrumbItem>
          <Link className="bread_link_tou" to="/sports">
            Sports
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link className="bread_link_tou" to={`/sports/${url_data.id}`}>
            {props.match[0].sport.name}
          </Link>{" "}
        </BreadcrumbItem>
        <BreadcrumbItem active>
          {props.match[0].tournament.title}
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="fa_star">
        {<FontAwesomeIcon icon={faStar} />}
        {props.match[0].tournament.title}
      </div>
      <div className="tour_upcoming">
        <span className="mx-5 px-5">Live</span>
        <span className="mx-5">1</span>
        <span className="mx-5">X</span>
        <span className="mx-5">2</span>
      </div>
      <div className="tab mt-2">No Live Matches</div>
      <div className="tour_upcoming">
        <span className="mx-5 px-5">Upcoming</span>
        <span className="mx-5">1</span>
        <span className="mx-5">X</span>
        <span className="mx-5">2</span>
      </div>
      {props.match.length === 0 ? (
        <div className="tab_panel_2">
          <Link to="/">No Upcoming Matches</Link>
        </div>
      ) : (
        <ul style={{ listStyle: "none" }} className="arr_match_ul_tou">
          {props.match.map((element, index) => {
            const temp = element?.main_markets[0]?.outcomes;
            if (element.status === "not_started") {
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
                          <div className="btn_odds">{"--"}</div>
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
                              } else {
                                return "-";
                              }
                            })}
                          </div>
                        ) : (
                          <div className="btn_odds">{"-"}</div>
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
                          <div className="btn_odds">{"--"}</div>
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
        </ul>
      )}
    </div>
  ) : (
    <div>No matches Found</div>
  );
}

const mapStateToProps = (state) => {
  return {
    match: state.match,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMatchDetail: (id, name) => dispatch(getMatchDetail(id, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentLink);

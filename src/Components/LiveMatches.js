import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLiveTournament } from "../Store/Actions/ActionCreator";
import "../Center.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import { NavLink, useParams } from "react-router-dom";

function LiveMatches({ getLiveTournament, live, index }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const url_data = useParams();

  useEffect(() => {
    getLiveTournament(index);
  }, [index]);

  const handleClick = (id) => {
    setShow(!show);
    setId(id);
  };

  let myobj = {};

  live.map((data) => {
    if (myobj[data.tournament.title]) {
      myobj[data.tournament.title].push(data);
    } else {
      myobj[data.tournament.title] = [data];
    }
  });

  const indexes = Object.keys(myobj);

  return (
    <>
      {indexes.length === 0 ? (
        <h6 className="mb-2">No Live Matches</h6>
      ) : (
        <ul style={{ listStyle: "none" }} className="arr_match_ul_live">
          {indexes.map((data, index) => {
            const value = myobj[data];
            return (
              <>
                <li key={index} className="arr_matches_live">
                  <div>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      <Grid className="col-12 text-truncate" item xs={4}>
                        {console.log(value[0].sport.id)}
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
                        <li key={index} className="arr_matches_li_live">
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    live: state.live,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLiveTournament: (id) => dispatch(getLiveTournament(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LiveMatches);

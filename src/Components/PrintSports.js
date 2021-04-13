import React, { useEffect, useState } from "react";
import "../App.css";
import { getCountry, getSports } from "../Store/Actions/ActionCreator";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function PrintSports({ getSports, games, getCountry, country }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [show2, setShow2] = useState(false);
  const [cid, setCid] = useState(0);

  const handleClick = (id) => {
    setShow(!show);
    getCountry(id);
    if (show) {
      setId(0);
    } else {
      setId(id);
    }
  };

  const handleClickCountry = (id) => {
    setShow2(!show2);
    if (show2) {
      setCid(0);
    } else {
      setCid(id);
    }
  };

  useEffect(() => {
    getSports();
  }, [getSports]);

  return (
    <React.Fragment>
      {games.map((sport) => {
        return (
          <ul style={{ listStyle: "none", paddingLeft: "15px" }}>
            <li key={sport.id} className="accordian">
              <span>
                <Link to={`/sports/${sport.id}`} className="link_list">
                  {sport.name}{" "}
                </Link>
              </span>
              <p className="fa" onClick={() => handleClick(sport.id)}>
                <FontAwesomeIcon icon={faCaretDown} />
              </p>
            </li>
            {id === sport.id ? (
              <>
                {country.map((con) => {
                  return (
                    <ul style={{ listStyle: "none", paddingLeft: "25px" }}>
                      <li key={con.id} className="dropdown row px-0 ">
                        <span className="col-10">{con.name}</span>
                        <p
                          className="text-right col-2"
                          onClick={() => handleClickCountry(con.id)}
                        >
                          <FontAwesomeIcon icon={faCaretDown} />
                        </p>
                      </li>
                      {cid === con.id ? (
                        <>
                          {con.tournaments?.map((tou) => {
                            return (
                              <ul
                                style={{
                                  listStyle: "none",
                                  paddingLeft: "5px",
                                }}
                              >
                                <li key={tou.id} className="drrop">
                                  <NavLink
                                    to={`/sports/${sport.id}/${tou.id}`}
                                    className="link_list"
                                  >
                                    {tou.title}
                                  </NavLink>
                                </li>
                              </ul>
                            );
                          })}
                        </>
                      ) : (
                        <></>
                      )}
                    </ul>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </ul>
        );
      })}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSports: () => dispatch(getSports()),
    getCountry: (id) => dispatch(getCountry(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintSports);

import React from "react";
import "../Center.css";
import { Link } from "react-router-dom";

function PrintSearch({ data }) {
  return (
    <div className="search_div">
      <ul className="ul_search">
        {data.matches ? (
          <>
            <h5>Matches</h5>
            {data?.matches.map((ele) => {
              return (
                <li className="text-truncate" key={ele.id}>
                  {ele.name}
                </li>
              );
            })}
          </>
        ) : (
          <></>
        )}
        {data.sports ? (
          <>
            <h5>Sports</h5>
            {data?.sports.map((ele) => {
              return (
                <Link to={`/sports/${ele.id}`}>
                  <li className="text-truncate" key={ele.id}>
                    {ele.name}
                  </li>
                </Link>
              );
            })}
          </>
        ) : (
          <></>
        )}
        {data.teams ? (
          <>
            <h5>Teams</h5>
            {data?.teams.map((ele) => {
              return (
                <li className="text-truncate" key={ele.id}>
                  {ele.name}
                </li>
              );
            })}
          </>
        ) : (
          <></>
        )}
        {data.tournaments ? (
          <>
            <h5>Tournaments</h5>
            {data?.tournaments.map((ele) => {
              return (
                <Link to={`/sports/${ele.sport.id}/${ele.id}`}>
                  <li className="text-truncate" key={ele.id}>
                    {ele.title}
                  </li>
                </Link>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default PrintSearch;

import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import '../Center.css'
import { getSearchData } from "../Store/Actions/ActionCreator";
import PrintSearch from "./PrintSearch";
import PrintSports from "./PrintSports";

function List(props) {
  const [searchh, setSearch] = useState("");
  const inputRef = useRef(null)

  const KeyPress = (event) => {
    setSearch(inputRef.current.value);
    props.getSearchData(searchh);
  };

  return (
    <>
      <div className="list">
        <input type="text" placeholder="Search" ref={inputRef} onKeyUp={KeyPress} />
        {searchh ? <div className="search_list"><PrintSearch data={props.search}/> </div>: <></>}
        <h6>Favourites</h6>
        <div className="list_newdiv">Available after REGISTER or LOGIN</div>
        <h6>Sports</h6>
        <PrintSports />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchData: (name) => dispatch(getSearchData(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
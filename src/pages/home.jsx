import React from "react";
import "../assets/style/style.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const toAddData = () => {
    history.push("/personalData");
  };

  const toDetail = () => {
    history.push("/detail");
  };

  return (
    <div className="container">
      <div className="row col-md-9 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Teravin test ReactJs</header>
        <button
          onClick={toAddData}
          className="col-sm-2 border-0 btn-pr text-white"
        >
          <span>Add data</span>
        </button>
        <div className="form-area mt-4">
          <div className="row field-table">
            <div className="col-2 p-2 text-center field">ID No.</div>
            <div className="col-4 p-2 text-center field">Nama</div>
            <div className="col-4 p-2 text-center field">Alamat</div>
            <div className="col-2 p-2 text-center field"></div>
          </div>
          <div className="row record-table">
            <div className="col-2 p-2 text-center record">????</div>
            <div className="col-4 p-2 text-center record">????</div>
            <div className="col-4 p-2 text-center record">????</div>
            <div onClick={toDetail} className="col-2 p-2 text-center record">
              Detail
            </div>
          </div>
          <div className="row record-table">
            <div className="col-2 p-2 text-center record">????</div>
            <div className="col-4 p-2 text-center record">????</div>
            <div className="col-4 p-2 text-center record">????</div>
            <div onClick={toDetail} className="col-2 p-2 text-center record">
              Detail
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

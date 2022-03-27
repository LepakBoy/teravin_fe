import React, { useState, useEffect } from "react";
import "../assets/style/style.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const toAddData = () => {
    history.push("/personalData");
  };

  const toDetail = (index) => {
    history.push(`/detail`, data[index]);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const allData = JSON.parse(localStorage.getItem("allData"));
    allData ? setData(allData) : setData([]);
  };

  console.log(data);

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
          {data.map((item, index) => (
            <>
              {" "}
              <div className="row record-table">
                <div className="col-2 p-2 text-center record">{index + 1}</div>
                <div className="col-4 p-2 text-center record">
                  {item.personalData?.nama}
                </div>
                <div className="col-4 p-2 text-center record">
                  {item.personalData?.alamat}
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                  <button
                    onClick={() => toDetail(index)}
                    className=" border-0 h-75 text-center record btn-detail"
                  >
                    detail
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

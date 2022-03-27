import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PersonalData = () => {
  const history = useHistory();
  const [data, setData] = useState({
    nama: "",
    email: "",
    tempatLahir: "",
    tglLahir: "",
    alamat: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toNext = () => {
    localStorage.setItem("personalData", JSON.stringify(data));
    history.push("/educations");
  };

  console.log(data);
  return (
    <div class="container">
      <div class="row col-md-10 mx-auto p-3 wrapper-outer">
        <header class="my-3 p-0">Form submission</header>
        <div class="progress-bar-area">progress bar</div>
        <div class="form-area mt-4 row p-2 w-100">
          <div class="col-md-6">
            <div class="row my-2">
              <div class="col-md-4 p-0">Nama Lengkap</div>
              <div class="col-md-8">
                <input
                  type="text"
                  class="w-100 px-1"
                  name="nama"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Email</div>
              <div class="col-md-8">
                <input
                  type="text"
                  class="w-100 px-1"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tempat lahir</div>
              <div class="col-md-8">
                <input
                  type="text"
                  class="w-100 px-1"
                  name="tempatLahir"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tanggal Lahir</div>
              <div class="col-md-8 d-flex">
                <input
                  type="date"
                  onChange={(e) => handleChange(e)}
                  name="tglLahir"
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row my-2">
              <div class="col-md-2 p-0">Alamat</div>
              <div class="col-md-10">
                <textarea
                  placeholder="write address here"
                  class="w-100"
                  name="alamat"
                  id=""
                  cols="30"
                  rows="5"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="button-area text-end">
          <button
            onClick={history.goBack}
            class="border-0 px-3 py-1 btn-sec text-white me-2"
          >
            <span>Back</span>
          </button>
          <button
            onClick={toNext}
            class="border-0 px-3 py-1 btn-pr text-white ms-2"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;

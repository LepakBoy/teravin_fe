import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-date-picker";

// import "react-date-picker/dist/DatePicker.css";

const PersonalData = () => {
  const history = useHistory();
  const [data, setData] = useState({
    nama: "",
    email: "",
    tempatLahir: "",
    tglLahir: "",
    alamat: "",
  });

  const month = [
    { no: 1, name: "Januari" },
    { no: 2, name: "Februari" },
    { no: 3, name: "Maret" },
    { no: 4, name: "April" },
    { no: 5, name: "Mei" },
    { no: 6, name: "Juni" },
    { no: 7, name: "Juli" },
    { no: 8, name: "Agustus" },
    { no: 9, name: "September" },
    { no: 10, name: "Oktober" },
    { no: 11, name: "November" },
    { no: 12, name: "Desember" },
  ];

  let date = [];

  for (let i = 1; i <= 31; i++) {
    date.push(i);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toNext = () => {
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
                {/* <select name="d" id="" className="me-1">
                  <option value="">tgl</option>
                  {date.map((x) => (
                    <option value={x} key={x}>
                      {x}
                    </option>
                  ))}
                </select>
                <select name="m" id="" className="mx-1">
                  <option value="">bln</option>
                  {month.map((x) => (
                    <option value={x.no} key={x.no}>
                      {x.name}
                    </option>
                  ))}
                </select>
                <input type="number" placeholder="th" class="w-100 px-1 ms-1" /> */}
                <DatePicker
                  name="tglLahir"
                  dateFormat="Pp"
                  selected={data.tglLahir}
                  onChange={(date) =>
                    setData({
                      ...data,
                      tglLahir: date
                        .toLocaleString("en-GB", {
                          timeZone: "Asia/Jakarta",
                        })
                        .split(",")[0],
                    })
                  }
                  className="border-0"
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

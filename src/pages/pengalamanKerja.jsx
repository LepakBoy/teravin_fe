import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const PengalamanKerja = () => {
  const history = useHistory();

  const [data, setData] = useState([
    {
      kantor: "",
      bidangUsaha: "",
      tahunMasuk: "",
      tahunKeluar: "",
    },
  ]);

  const addForm = () => {
    setData([
      ...data,
      { kantor: "", bidangUsaha: "", tahunMasuk: "", tahunKeluar: "" },
    ]);
  };

  const handleChange = (e, index) => {
    let newData = [...data];
    newData[index][e.target.name] = e.target.value;
    console.log(newData);
    setData(newData);
  };

  const toNext = () => {
    localStorage.setItem("experience", JSON.stringify(data));
    history.push("/skill");
  };

  return (
    <div class="container">
      <div class="row col-md-10 mx-auto p-3 wrapper-outer">
        <header class="my-3 p-0">Form submission</header>
        <div class="progress-bar-area">progress bar</div>
        <div class="form-area mt-4 row p-2 w-100">
          {data.map((x, index) => (
            <>
              <div class="col-md-6">
                <div class="row my-2">
                  <div class="col-md-4 p-0">Nama Kantor</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      onChangeCapture={(e) => handleChange(e, index)}
                      name="kantor"
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Bidang Usaha</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      onChangeCapture={(e) => handleChange(e, index)}
                      name="bidangUsaha"
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Masuk</div>
                  <div class="col-md-8">
                    <input
                      type="number"
                      class="w-100 px-1"
                      onChangeCapture={(e) => handleChange(e, index)}
                      name="tahunMasuk"
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Keluar</div>
                  <div class="col-md-8">
                    <input
                      type="number"
                      class="w-100 px-1"
                      onChangeCapture={(e) => handleChange(e, index)}
                      name="tahunKeluar"
                    />
                  </div>
                </div>
              </div>
            </>
          ))}

          <div class="col-md-6">
            <div class="row my-2">
              <button
                onClick={addForm}
                class="border-0 w-50 mx-auto add-form-button"
              >
                <span class="">+</span>
                <span class="d-block font-small">Add pengalaman kerja</span>
              </button>
            </div>
          </div>
        </div>
        <div class="button-area text-end">
          <button onClick={toNext} class="border-0 px-3 py-1 btn-pr text-white">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PengalamanKerja;

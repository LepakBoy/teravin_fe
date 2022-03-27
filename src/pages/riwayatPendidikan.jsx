import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RiwayatPendidikan = () => {
  const history = useHistory();
  const [data, setData] = useState([
    {
      jenjang: "",
      namaSekolah: "",
      masuk: "",
      lulus: "",
    },
  ]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toNext = () => {
    history.push("/experience");
  };

  const addForm = () => {
    setData([...data, { jenjang: "", namaSekolah: "", masuk: "", lulus: "" }]);
  };

  console.log(data);
  return (
    <div class="container">
      <div class="row col-md-10 mx-auto p-3 wrapper-outer">
        <header class="my-3 p-0">Form submission</header>
        <div class="progress-bar-area">progress bar</div>
        <div class="form-area mt-4 row p-2 w-100">
          {data.map((item) => (
            <>
              <div class="col-md-6">
                <div class="row my-2">
                  <div class="col-md-4 p-0">Jenjang</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      name="jenjang"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Nama Sekolah</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      name="namaSekolah"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Masuk</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      name="masuk"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Lulus</div>
                  <div class="col-md-8">
                    <input
                      type="text"
                      class="w-100 px-1"
                      name="lulus"
                      onChange={(e) => handleChange(e)}
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
                <span class="d-block font-small">Add riwayat pendidikan</span>
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

export default RiwayatPendidikan;

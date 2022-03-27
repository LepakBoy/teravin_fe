import React from "react";
import { useHistory } from "react-router-dom";

const PengalamanKerja = () => {
  const history = useHistory();

  const toNext = () => {
    history.push("/skill");
  };

  return (
    <div class="container">
      <div class="row col-md-10 mx-auto p-3 wrapper-outer">
        <header class="my-3 p-0">Form submission</header>
        <div class="progress-bar-area">progress bar</div>
        <div class="form-area mt-4 row p-2 w-100">
          <div class="col-md-6">
            <div class="row my-2">
              <div class="col-md-4 p-0">Nama Kantor</div>
              <div class="col-md-8">
                <input type="text" class="w-100 px-1" />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Bidang Usaha</div>
              <div class="col-md-8">
                <input type="text" class="w-100 px-1" />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tahun Masuk</div>
              <div class="col-md-8">
                <input type="text" class="w-100 px-1" />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tahun Keluar</div>
              <div class="col-md-8">
                <input type="text" class="w-100 px-1" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row my-2">
              <button class="border-0 w-50 mx-auto add-form-button">
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

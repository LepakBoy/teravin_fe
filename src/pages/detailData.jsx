import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const DetailData = (props) => {
  const history = useHistory();
  const [data, setData] = useState(props.location.state);

  useEffect(() => {
    console.log("aosdasd");
  }, []);

  console.log(data);

  return (
    <div class="container">
      <div class="row col-md-10 mx-auto p-3 wrapper-outer">
        <header class="my-3 p-0">Form submission</header>
        <div class="form-area mt-4 row p-2 w-100">
          <section class="col-md-6">
            <div class="col-md-12 p-0 title-data">Personal Data</div>
            <div class="row my-2"></div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Nama Lengkap</div>
              <div class="col-md-8">
                <span>{data.personalData?.nama}</span>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Email</div>
              <div class="col-md-8">
                <span>{data.personalData?.email}</span>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tempat lahir</div>
              <div class="col-md-8">
                <span>{data.personalData?.tempatLahir}</span>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-4 p-0">Tanggal Lahir</div>
              <div class="col-md-8">
                <span>{data.personalData?.tglLahir}</span>
              </div>
            </div>
            <div class="col-md-12 title-data">Pengalaman Kerja</div>
            {data.experience.map((item) => (
              <div class="wrapper-data">
                <div class="row my-2"></div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Nama Kantor</div>
                  <div class="col-md-8">
                    <span>{item?.kantor}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Bidang Usaha</div>
                  <div class="col-md-8">
                    <span>{item?.bidangUsaha}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Masuk</div>
                  <div class="col-md-8">
                    <span>{item?.tahunMasuk}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Keluar</div>
                  <div class="col-md-8">
                    <span>{item?.tahunKeluar}</span>
                  </div>
                </div>
              </div>
            ))}

            <div class="col-md-12 title-data">Keahlian</div>
            {data.skills.map((item) => (
              <span className="d-block">{item}</span>
            ))}
          </section>

          <section class="col-md-6">
            <div class="col-md-12 title-data">Riwayat Pendidikan</div>
            {data.educations.map((item) => (
              <div class="wrapper-data">
                <div class="row my-2"></div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Jenjang</div>
                  <div class="col-md-8">
                    <span>{item?.jenjang}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Nama Sekolah</div>
                  <div class="col-md-8">
                    <span>{item?.namaSekolah}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Masuk</div>
                  <div class="col-md-8">
                    <span>{item?.masuk}</span>
                  </div>
                </div>
                <div class="row my-2">
                  <div class="col-md-4 p-0">Tahun Lulus</div>
                  <div class="col-md-8">
                    <span>{item?.lulus}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div class="button-area text-end">
          <button
            onClick={history.goBack}
            class="border-0 px-3 py-1 btn-sec text-white"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailData;

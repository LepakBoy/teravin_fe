import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Content from "../components/inputs";
import FormLable from "../components/formLable";

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
    setData(newData);
  };

  const toNext = () => {
    localStorage.setItem("experience", JSON.stringify(data));
    history.push("/skill");
  };

  return (
    <div className="container">
      <div className="row col-md-10 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Form submission</header>
        <div className="progress-bar-area">progress bar</div>
        <div className="form-area mt-4 row p-2 w-100">
          {data.map((x, index) => (
            <>
              <div className="col-md-6">
                {Content.inputsExperience.map((item) => (
                  <FormLable
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    onChange={(e) => handleChange(e, index)}
                    error={item.error}
                  />
                ))}
              </div>
            </>
          ))}
          <div className="col-md-6">
            <div className="row my-2">
              <button
                onClick={addForm}
                className="border-0 w-50 mx-auto add-form-button"
              >
                <span className="">+</span>
                <span className="d-block font-small">Add pengalaman kerja</span>
              </button>
            </div>
          </div>
        </div>
        <div className="button-area text-end">
          <button
            onClick={history.goBack}
            className="border-0 px-3 py-1 btn-sec text-white me-2"
          >
            <span>Back</span>
          </button>
          <button
            onClick={toNext}
            className="border-0 px-3 py-1 btn-pr text-white"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PengalamanKerja;

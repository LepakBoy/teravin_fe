import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Content from "../components/inputs";
import FormLable from "../components/formLable";

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

  const handleChange = (e, index) => {
    let newData = [...data];
    newData[index][e.target.name] = e.target.value;
    setData(newData);
  };

  const toNext = () => {
    data.map((item) => {
      for (const i in data) {
        if (data[i] === "") {
          alert("Please filled blank input");
          return;
        }
      }
    });

    localStorage.setItem("educations", JSON.stringify(data));
    history.push("/experience");
  };

  const addForm = () => {
    setData([...data, { jenjang: "", namaSekolah: "", masuk: "", lulus: "" }]);
  };

  return (
    <div className="container">
      <div className="row col-md-10 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Form submission</header>
        <div className="progress-bar-area">progress bar</div>
        <div className="form-area mt-4 row p-2 w-100">
          {data.map((item, index) => (
            <>
              <div className="col-md-6">
                {Content.inputsEducations.map((x) => (
                  <FormLable
                    label={x.label}
                    name={x.name}
                    type={x.type}
                    onChange={(e) => handleChange(e, index)}
                    error={x.error}
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
                <span className="d-block font-small">
                  Add riwayat pendidikan
                </span>
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

export default RiwayatPendidikan;

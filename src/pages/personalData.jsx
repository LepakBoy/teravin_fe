import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Content from "../components/inputs";
import FormLable from "../components/formLable";

const PersonalData = () => {
  const history = useHistory();
  const [data, setData] = useState({
    nama: "",
    email: "",
    tempatLahir: "",
    tglLahir: "",
    alamat: "",
  });

  const [focus, setFocus] = useState(false);

  const handleFocus = (e) => {
    setFocus(true);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toNext = () => {
    for (const i in data) {
      if (data[i] === "") {
        alert("Please filled blank input");
        return;
      }
    }
    localStorage.setItem("personalData", JSON.stringify(data));
    history.push("/educations");
  };

  return (
    <div className="container">
      <div className="row col-md-10 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Form submission</header>
        <div className="progress-bar-area">progress bar</div>
        <div className="form-area mt-4 row p-2 w-100">
          <div className="col-md-6">
            {Content.inputsPersonalData.map((item) => (
              <FormLable
                label={item.label}
                name={item.name}
                type={item.type}
                onChange={(e) => handleChange(e)}
                error={item.error}
              />
            ))}
          </div>
          <div className="col-md-6">
            <div className="row my-2">
              <div className="col-md-2 p-0">Alamat</div>
              <div className="col-md-10">
                <textarea
                  onBlur={handleFocus}
                  focused={focus.toString()}
                  placeholder="write address here"
                  className="w-100 error-input"
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
        <div className="button-area text-end">
          <button
            onClick={history.goBack}
            className="border-0 px-3 py-1 btn-sec text-white me-2"
          >
            <span>Back</span>
          </button>
          <button
            onClick={toNext}
            className="border-0 px-3 py-1 btn-pr text-white ms-2"
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;

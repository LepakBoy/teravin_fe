import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Keahlian = () => {
  const history = useHistory();

  const [skills, setSkills] = useState([""]);

  const addList = () => {
    setSkills([...skills, ""]);
  };

  const handleSubmit = () => {
    const result = {
      personalData: JSON.parse(localStorage.getItem("personalData")),
      educations: JSON.parse(localStorage.getItem("educations")),
      experience: JSON.parse(localStorage.getItem("experience")),
      skills,
    };

    const allData = JSON.parse(localStorage.getItem("allData"));
    const finall = allData ? [...allData, result] : [result];

    localStorage.setItem("allData", JSON.stringify(finall));

    history.push("/");
  };

  const handleChange = (e, index) => {
    let newData = [...skills];
    newData[index] = e.target.value;
    setSkills(newData);
  };

  return (
    <div className="container">
      <div className="row col-md-10 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Form submission</header>
        <div className="progress-bar-area"></div>
        <div className="form-area mt-4 row p-2 w-100">
          <div className="col-md-12 my-3">
            {skills.map((x, index) => (
              <input
                type="text"
                className="w-100 px-1 skill-input mb-3"
                placeholder="input skill"
                onChange={(e) => handleChange(e, index)}
              />
            ))}

            <button onClick={addList} className="w-100 border-0 mt-5 p-3">
              Add Skill
            </button>
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
            onClick={handleSubmit}
            className="border-0 px-3 py-1 btn-pr text-white"
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keahlian;

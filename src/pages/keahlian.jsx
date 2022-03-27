import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Keahlian = () => {
  const history = useHistory();

  const [skills, setSkills] = useState([""]);

  const addList = () => {
    setSkills([...skills, ""]);
  };

  const toHome = () => {
    history.push("/");
  };

  console.log(skills);

  return (
    <div className="container">
      <div className="row col-md-10 mx-auto p-3 wrapper-outer">
        <header className="my-3 p-0">Form submission</header>
        <div className="progress-bar-area"></div>
        <div className="form-area mt-4 row p-2 w-100">
          <div className="col-md-12 my-3">
            {skills.map((x) => (
              <input
                type="text"
                className="w-100 px-1 skill-input mb-3"
                placeholder="input skill"
              />
            ))}

            <button onClick={addList} className="w-100 border-0 mt-5 p-3">
              Add Skill
            </button>
          </div>
        </div>
        <div className="button-area text-end">
          <button
            onClick={toHome}
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

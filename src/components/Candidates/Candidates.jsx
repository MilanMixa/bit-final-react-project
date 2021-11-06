import { useEffect, useState } from "react";
import useTokenValidator from "../../hooks/useTokenValidator";

import { getCandidatesAPI } from "../../services/services";
import Card from "./Card/Card";
import NotFoundCandidate from "./NotFoundCandidate";

import avatar from "../../assets/avatar.jpg";

import "./Candidates.css";

const Candidates = ({setIsLoggedIn}) => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setfilteredCandidates] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const validate = useTokenValidator();
  const token = localStorage.getItem("token");

  useEffect(() => {
    getCandidatesAPI(token, validate, setIsLoggedIn)
    .then(candidates => {
        setCandidates(candidates);
        setfilteredCandidates(candidates);
      }
    );
  }, [setIsLoggedIn]);

  const onTypingHandler = (e) => {
    setInputValue(e.target.value);
    const filtered = candidates.filter((candidate) => 
      candidate?.name?.toLowerCase().includes(e?.target?.value?.toLowerCase().trim())
      );
    setfilteredCandidates(filtered);
  };

  return (
    <div className="w-75 mx-auto mt-5 mb-5">
      <div className="d-flex flex-wrap flex-md-nowrap justify-content-md-between text-center">
        <h2 className="candidates-title col-12 col-md-6 text-md-start">
          Candidates
        </h2>
        <div className="col-12 col-md-6 text-md-end">
          <input
            value={inputValue}
            placeholder="Search..."
            type="text"
            onChange={onTypingHandler}
            className="w-50 w-sm-25 w-md-25 ps-3 py-2 input-search"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between mt-5">
        {filteredCandidates.length === 0 ? 
          <NotFoundCandidate /> 
          : filteredCandidates.map((candidate, index) => (
          <Card candidateInfo={candidate} key={index} avatar={avatar} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
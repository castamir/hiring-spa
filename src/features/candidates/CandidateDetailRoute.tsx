import React from "react";
import { CandidateReadDto } from "../../domain/candidate";

export type Props = {
  candidate?: CandidateReadDto;
};

const CandidateDetailRoute: React.FC<Props> = ({ candidate }) => {
  if (!candidate) {
    return null;
  }

  return (
    <div>
      <h2>
        {candidate.name} {candidate.surname}
      </h2>
      <div>
        <p>{candidate.nationality}</p>
        <p>{candidate.state}</p>
        <p>{candidate.email}</p>
        <p>{candidate.links}</p>
      </div>
    </div>
  );
};

export default CandidateDetailRoute;

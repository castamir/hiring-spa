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
    </div>
  );
};

export default CandidateDetailRoute;

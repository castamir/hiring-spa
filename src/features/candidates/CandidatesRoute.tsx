import React from "react";

import { CandidateReadDto } from "../../domain/candidate";
import { getCandidates } from "../../common/api";

export type Props = {};

const CandidatesRoute: React.FC<Props> = () => {
  const [candidates, setCandidates] = React.useState<CandidateReadDto[]>([]);

  React.useEffect(() => {
    getCandidates().then((result) => {
      setCandidates(result);
    });
  }, []);

  return (
    <article>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>

        {candidates.map((candidate, index) => (
          <tr key={candidate.email}>
            <td>{index + 1}.</td>
            <td>{candidate.name}</td>
            <td>{candidate.surname}</td>
            <td>{candidate.email}</td>
          </tr>
        ))}
      </table>
    </article>
  );
};

export default CandidatesRoute;

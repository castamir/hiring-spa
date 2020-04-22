import React from "react";

import { CandidateReadDto } from "../../domain/candidate";
import { getCandidates } from "../../common/api/api";
import { Table } from "./CandidateListRoute.styles";

export type Props = {
  onSelect: (candidate: CandidateReadDto) => void;
};

const CandidateListRoute: React.FC<Props> = ({ onSelect }) => {
  const [candidates, setCandidates] = React.useState<CandidateReadDto[]>([]);

  React.useEffect(() => {
    getCandidates().then((result) => {
      setCandidates(result);
    });
  }, []);

  return (
    <article>
      <Table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th />
        </tr>

        {candidates.map((candidate, index) => (
          <tr key={candidate.email}>
            <td>{index + 1}.</td>
            <td>{candidate.name}</td>
            <td>{candidate.surname}</td>
            <td>{candidate.email}</td>
            <td>
              <button onClick={() => onSelect(candidate)}>Select</button>
            </td>
          </tr>
        ))}
      </Table>
    </article>
  );
};

export default CandidateListRoute;

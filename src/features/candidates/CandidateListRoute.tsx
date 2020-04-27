import React from "react";

import { CandidateReadDto } from "../../domain/candidate";
import { getCandidates } from "../../common/api/api";
import { Table, TableRow, Button } from "./CandidateListRoute.styles";

export type Props = {
  onSelect: (candidate: CandidateReadDto) => void;
  selectedCandidateId?: string;
};

const CandidateListRoute: React.FC<Props> = ({
  onSelect,
  selectedCandidateId,
}) => {
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
          <TableRow
            key={candidate.email}
            isSelected={selectedCandidateId === candidate.id}
          >
            <td>{index + 1}.</td>
            <td>{candidate.name}</td>
            <td>{candidate.surname}</td>
            <td>{candidate.email}</td>
            <td>
              <Button
                onClick={(e) => {
                  onSelect(candidate);
                }}
              >
                Select
              </Button>
            </td>
          </TableRow>
        ))}
      </Table>
    </article>
  );
};

export default CandidateListRoute;

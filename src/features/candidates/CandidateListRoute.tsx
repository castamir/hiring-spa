import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RouteComponentProps } from "react-router-dom";

import { getCandidates } from "../../common/api/api";
import { CandidateReadDto } from "../../domain/candidate";
import CandidateDetailRoute from "./CandidateDetailRoute";
import { Table, TableRow, Button } from "./CandidateListRoute.styles";
import {
  fetchCandidatesSuccess,
  selectCandidate,
  selectCandidateList,
  selectSelectedCandidate,
} from "./ducks";

const mapStateToProps = (state: any) => ({
  candidateList: selectCandidateList(state),
  selectedCandidate: selectSelectedCandidate(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoad: bindActionCreators(fetchCandidatesSuccess, dispatch),
  onSelect: bindActionCreators(selectCandidate, dispatch),
});

export type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

const CandidateListRoute: React.FC<Props> = ({
  candidateList,
  selectedCandidate,
  history,
  onSelect,
  onLoad,
}) => {
  React.useEffect(() => {
    getCandidates().then((result) => {
      onLoad(result);
    });
  }, [onLoad]);

  const handleOnSelect = (candidate: CandidateReadDto) => {
    onSelect(candidate);
    history.push(`/candidateDetail/${candidate.id}`);
  };

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

        {candidateList.map((candidate: CandidateReadDto, index: number) => (
          <TableRow
            key={candidate.email}
            isSelected={selectedCandidate === candidate}
          >
            <td>{index + 1}.</td>
            <td>{candidate.name}</td>
            <td>{candidate.surname}</td>
            <td>{candidate.email}</td>
            <td>
              <Button onClick={() => handleOnSelect(candidate)}>Select</Button>
            </td>
          </TableRow>
        ))}
      </Table>
    </article>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CandidateListRoute);

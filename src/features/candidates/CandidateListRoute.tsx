import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CandidateReadDto } from "../../domain/candidate";
import { getCandidates } from "../../common/api/api";
import { Table, TableRow, Button } from "./CandidateListRoute.styles";
import { fetchCandidatesSuccess, selectCandidateList } from "./ducks";

const mapStateToProps = (state: any) => ({
  candidateList: selectCandidateList(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoad: bindActionCreators(fetchCandidatesSuccess, dispatch),
});

export type BaseProps = {
  onSelect: (candidate: CandidateReadDto) => void;
  selectedCandidateId?: string;
};

export type Props = BaseProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const CandidateListRoute: React.FC<Props> = ({
  candidateList,
  selectedCandidateId,
  onSelect,
  onLoad,
}) => {
  React.useEffect(() => {
    getCandidates().then((result) => {
      onLoad(result);
    });
  }, [onLoad]);

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

        {candidateList.map((candidate, index) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(CandidateListRoute);

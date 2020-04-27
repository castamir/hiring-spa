import styled from "styled-components/macro";

export const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid gray;
  margin: 5px;

  td,
  th {
    padding-left: 10px;
    padding-right: 10px;
    width: 20px;
  }
  th {
    background: lightcoral;
    /* top: 0;
    position: sticky; */
  }
`;

export const TableRow = styled.tr<{ isSelected: Boolean }>`
  background: ${(props) => (props.isSelected ? "#cccccc" : "#ffffff")};
  &:nth-child(2n + 1) {
    margin-bottom: 20px;
    background: ${(props) =>
      props.isSelected ? "#a1dcff" : "#d7eefc"} !important;
  }
`;

export const Button = styled.button`
  background: white;
  color: #6126eb;
  border: 2px solid #6126eb;
  border-radius: 3px;
`;

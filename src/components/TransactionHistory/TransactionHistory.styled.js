import styled from 'styled-components';

export const Table = styled.table`
padding:10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 450px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(170, 208, 219, 0.93);
`;

export const TableHead = styled.thead`
  background-color: azure;
`;

export const TableHeadCell = styled.th`
  width: calc(100% / 3);
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`;

export const TableRowEl = styled.tr`
  background-color: azure;

`;

export const TableDataCell = styled.td`
cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color:azure;
    transform: scale(1);
    font-weight:bold;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
  text-align: center;

  width: calc(100% / 3);
  height: 50px;

  border: 1px solid #555;
`;

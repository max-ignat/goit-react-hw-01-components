import styled from 'styled-components';


export const Item = styled.li`
  display: flex;
  justify-content: center;
  margin: 1px auto;
  align-items: center;
  width: 250px;
  border-radius: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
  background-color: aquamarine;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;


export const Avatar = styled.img`
  margin: 10px;
  height: 60px;
  border-radius: 15px;
  background-color: teal;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
font-weight: 600;

  `;

 

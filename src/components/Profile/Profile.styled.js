import styled from "styled-components";

export const ProfileContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 280px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(170, 208, 219, 0.93);
`;

export const Description = styled.div`
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  border-radius: 50%;
  background-color: azure;
`;

export const ParagraphDesc = styled.p`
  text-align: center;
  
`;

export const Name = styled.p`
text-align:center;
font-weight:700;
`
export const StatList = styled.ul`
  background-color: azure;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin-bottom: 0;
`;

export const StatsItem = styled.li`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid gainsboro;
  text-align: center;
`;

export const Label = styled.span`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;
`;

export const Quantity = styled.span`
  font-weight: 700;
  display: block;
`;
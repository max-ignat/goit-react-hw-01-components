import styled from "styled-components";
import getRandomHexColor from "utils/getRandomColor";



export const Section = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 280px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(170, 208, 219, 0.93);
`;
export const Title = styled.h2`
  text-align: center;
  margin:10px;
`;

export const StatsList = styled.ul`

/* width:300px; */
display:flex;
/* justify-content: center; */

`

export const Item = styled.li`
  margin:1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  border-radius: 2px;
  border: solid 1px gray;

  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  } */
  background-color: ${getRandomHexColor};
`;

export const SpanEl = styled.span`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: block;

  font-weight:400;
`;
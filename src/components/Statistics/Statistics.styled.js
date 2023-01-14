import styled from "styled-components";
import getRandomHexColor from "utils/getRandomColor";



export const Section = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 280px;
`;
export const Title = styled.h2`
 text-align:center;
`;

export const StatsList = styled.ul`

/* width:300px; */
display:flex;
/* justify-content: center; */

`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  border-radius: 2px;

  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  } */
  background-color: ${getRandomHexColor};
`;
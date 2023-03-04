import styled from '@emotion/styled';

export const BtnWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const ButtonStat = styled.button`
  padding: 5px 20px;
  border: 2px solid;
  border-radius: 5px;
  background-color: transparent;
  transition: 100ms background-color;

  cursor: grab;

  :hover {
    background-color: #ffffff;
  }
  :active {
    color: #ff0000;
    background-color: #222eb691;
    cursor: grabbing;
  }
`;

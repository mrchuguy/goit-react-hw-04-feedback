import styled from 'styled-components';

export const BtnWrap = styled.div`
  padding: 15px 0;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background: #ececec;
  border-radius: 15px;
  padding: 6px 12px;
  display: block;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  text-transform: capitalize;
  text-shadow: 0px 1px 0px #fff;
  border: 1px solid #a7a7a7;
  box-shadow: 0px 2px 1px white inset, 0px -2px 8px white,
    0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.5s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 1px white inset, 0px -2px 20px white,
      0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
    background: -webkit-linear-gradient(top, #d1d1d1 0%, #ececec 100%);
  }
`;

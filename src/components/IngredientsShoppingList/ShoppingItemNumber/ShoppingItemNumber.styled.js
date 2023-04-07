const { default: styled } = require('styled-components');

export const Wrapper = styled.div`
  background-color: var(--greenColor);
  width: 120px;
  min-height: 23px;
  color: var(--whiteColor);
  font-size: 10px;
  line-height: 1.25;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px 5px;
  height: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 190px;
    min-height: 36px;
    font-size: 16px;
    padding: 5px;
  }

  @media screen and (min-width: 1440px) {
    width: 197px;
    font-size: 18px;
  }
`;


import styled from 'styled-components';
import icoMailMob from '../../images/Subscribe/icon-mail-sub-mob.svg';
import icoMailTab from '../../images/Subscribe/icon-mail-sub-tab.svg';

const formInputStyles = `
font-family: 'Poppins';
font-size: 10px;
color: var(--primary-white);
caret-color: var(--primary-white);
outline: none;

&::placeholder {
  font-family: 'Poppins';
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--primary-white);
}

@media (min-width: 768px) {
  font-size: 14px;
  &::placeholder {
    font-size: 14px;
  }
}

@media (min-width: 1440px) {
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
}
`;

export const FormWrapper = styled.div`
  margin: 32px auto 0;

  @media (min-width: 768px) {
    margin-top: 72px;
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;


export const InputWrap = styled.div`
  position: relative;
  border: 1px solid var(--primary-white);
  border-radius: 6px;
  width: 204px;
  height: 38px;
  padding: 12px;
  transition: border 250ms ease;

  &:hover {
    border: 2px solid var(--white);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    width: 16px;
    height: 12px;
    background-image: url(${icoMailMob});
    background-size: contain;
    background-repeat: no-repeat;
  }

  ${formInputStyles}

  @media (min-width: 768px) {
    height: 50px;
    width: 259px;
    margin: 0;

    &::before {
      left: 15px;
      width: 20px;
      height: 16px;
      background-image: url(${icoMailTab});
    }
  }

  @media (min-width: 1440px) {
    height: 59px;
    width: 338px;
    margin-bottom: 16px;

    &::before {
      left: 16px;
      width: 20px;
      height: 16px;
      background-image: url(${icoMailTab});
    }
  }
`;


export const Input = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  padding: 12px 0 12px 42px;
  margin-left: -12px;
  border-radius: 6px;
  border: none;
  background: transparent;

  ${formInputStyles}

  @media (min-width: 768px) {
    padding: 15px 0 14px 51px;
  }

  @media (min-width: 1440px) {
    padding: 18px 0 17px 52px;
  }
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 204px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  color: var(--primary-white);
  background-color: var(--primary-green);
  transition: color 250ms ease;

  &:hover {
    color: var(--secondary-black);
  }

  @media (min-width: 768px) {
    height: 50px;
    width: 171px;
    font-size: 16px;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    height: 60px;
    width: 339px;
    font-size: 16px;
    line-height: 1.12;
  }
`;

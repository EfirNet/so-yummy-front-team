import styled from 'styled-components';

import { StyledSearchGreenBtn } from '../../Buttons/Buttons.styled';
import { ReactComponent as NotFoundAvatar } from 'images/InputsState/user.svg';

import { ReactComponent as EditIcon } from 'images/EditProfilePen/edit-profile-pen.svg';

export const UserInform = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const UserAvatarWrp = styled.div`
  width: 34px;
  height: 34px;

  padding: 5px;
  margin-right: 14px;
  border-radius: 50%;

  overflow: hidden;

  background-color: var(--light-gray);
  background-image: ${props =>
    props.avatar ? `url(${props.avatar})` : 'none'};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: auto;
`;

export const UserWithoutAvatar = styled(NotFoundAvatar)`
  fill: white;
`;

export const UserName = styled.p`
  margin-right: 24px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;

  color: var(--secondary-black);
  transition: color var(--transition-function);

  &:hover {
    color: var(--primary-green);
  }

  @media screen and (min-width: 768px) {
    margin-right: 50px;

    font-size: 14px;
  }
`;

// Pop-Up style

export const PopUp = styled.div`
  position: absolute;
  top: 52px;
  right: 20%;
  width: 161px;
  height: 130px;

  padding: 18px;

  background: var(--primary-white);
  border: 1px solid var(--primary-green);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 177px;
    height: 134px;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const EditText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: var(--primary-black);
  transition: color var(--transition-function);

  ${EditWrapper}:hover & {
    color: var(--primary-green);
  }
`;

export const EditBtn = styled.button`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
`;

export const EditPen = styled(EditIcon)`
  stroke: var(--primary-black);

  transition: stroke var(--transition-function);

  ${EditWrapper}:hover & {
    stroke: var(--primary-green);
  }
`;

export const LogOutBtn = styled(StyledSearchGreenBtn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 125px;
  padding: 12px 24px;

  @media screen and (min-width: 768px) {
    min-width: 141px;
    padding: 12px 32px;
    font-size: 14px;
  }
`;

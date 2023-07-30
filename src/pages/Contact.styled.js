import styled, { keyframes } from 'styled-components';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

//

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
export const RotatingContactPhoneIcon = styled(ContactPhoneIcon)`
  animation: ${spinAnimation} 3s linear infinite;
`;

export const Grid = styled.div`
  width: 550px;
  margin: 15px auto;
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 6px;
  font-size: 35px;
  margin-bottom: 10px;
  font-family: Georgia, serif;
  color: #6106b5;
`;

export const Subtitle = styled.p`
  text-align: center;
`;

export const Count = styled.span`
  color: #6106b5;
  font-size: 20px;
  font-weight: 600;
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 20px;
`;

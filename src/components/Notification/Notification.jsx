import { toast } from 'react-toastify';

export const notCorrectContact = () => {
  toast.warning('Write correct name or number');
};

export const notCorrectRegistration = () => {
  toast.error('The filds cannot be empty');
};

export const notCorrectLogIn = () => {
  toast.error('Complete the fields');
};

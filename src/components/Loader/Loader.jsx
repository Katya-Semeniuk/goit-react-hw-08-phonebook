import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <RotatingLines
      height="30"
      width="30"
      strokeColor="#00bfa5"
      ariaLabel="loader"
    />
  );
};

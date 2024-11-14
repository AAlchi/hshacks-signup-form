import { ClipLoader } from 'react-spinners';

const LoadingComponent = () => {
  return (
    <div className='flex justify-center h-[100vh] [alignItems:center]'>
      <ClipLoader color="#36d7b7" loading={true} size={50} />
    </div>
  );
};

export default LoadingComponent;

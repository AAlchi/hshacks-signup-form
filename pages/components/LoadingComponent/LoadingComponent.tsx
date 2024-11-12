// components/LoadingComponent.js
import { ClipLoader } from 'react-spinners';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader color="#36d7b7" loading={true} size={50} />
    </div>
  );
};

export default LoadingComponent;

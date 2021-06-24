import { useSelector } from 'react-redux';
import { selectActionStatus } from '../features/status/statusSlice';

const useActionStatus = (action) => {
  const status = useSelector((state) => selectActionStatus(state, action));
  return status;
};

export default useActionStatus;

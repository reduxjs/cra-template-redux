import { useCallback, useState } from 'react';

import uploadFile from '../app/uploadFile';

const useFileUpload = (onValueChange) => {
  const [progress, setProgress] = useState(0);

  const handleUpload = useCallback(
    async (e) => {
      try {
        const file = e.target.files[0];
        if (!file) {
          return;
        }
        const { fileUrl } = await uploadFile(file, setProgress);
        onValueChange(fileUrl);
        setProgress(0);
      } catch (err) {
        setProgress(0);
        throw err;
      }
    },
    [onValueChange],
  );

  return [progress, handleUpload];
};

export default useFileUpload;

/* eslint-disable no-throw-literal */
import { create } from 'apisauce';
import apiClient from './apiClient';

const fileUploadClient = create();

const uploadFile = async (file, onProgress) => {
  const response = await apiClient.post('/storage', {
    name: file?.name,
    type: file?.type,
  });

  if (!response.ok) {
    throw { response };
  }

  const { signed } = response.data;

  const config = {
    onUploadProgress: (ev) =>
      onProgress(Math.round((ev.loaded / ev.total) * 100)),
    headers: {
      'Content-Type': file?.type,
    },
  };

  await fileUploadClient.put(signed, file, config);

  return {
    fileUrl: signed.split('?')[0],
  };
};

export default uploadFile;

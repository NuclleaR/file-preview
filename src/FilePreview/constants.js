import { shape, string, number, oneOf } from 'prop-types';

export const FILE_TYPES = {
  IMAGE: 'image',
  PDF: 'pdf',
};

export const FileShape = shape({
  fileName: string,
  url: string,
  id: string,
  accountId: number,
  taskId: number,
  status: oneOf(['ALLOWED']),
});

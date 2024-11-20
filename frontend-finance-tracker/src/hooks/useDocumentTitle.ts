import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title ? `${title} | Finance Tracker` : 'Finance Tracker';
  }, [title]);
};

export default useDocumentTitle;

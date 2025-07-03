import { useEffect, useCallback } from 'react';
import { useSearchStore } from '../store/useSearchStore';

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debounced.cancel = () => clearTimeout(timer);

  return debounced;
}

const useSearch = (searchFunction: (query: string) => void, delay = 300) => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      searchFunction(query);
    }, delay),
    [searchFunction, delay]
  );

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      debouncedSearch(searchQuery);
    } else {
      searchFunction('');
    }

    return () => {
      debouncedSearch.cancel?.();
    };
  }, [searchQuery, debouncedSearch, searchFunction]);

  return {
    searchQuery,
    setSearchQuery,
  };
};

export default useSearch;

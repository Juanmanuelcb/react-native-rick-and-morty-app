import { useInfiniteQuery } from '@tanstack/react-query';
import * as React from 'react';
import { CharacterService } from '../../api/client';
import { QUERY_KEYS } from '../../api/keys';
import { CharacterStatus } from '../../api/models';
import { HomeComponent } from './HomeComponent';

const INITIAL_PAGE_SIZE = 5;
const API_PAGE_SIZE = 20;

export const HomeScreen = () => {
  const [searchName, setSearchName] = React.useState<string>();
  const [searchStatus, setSearchStatus] = React.useState<CharacterStatus>();
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_PAGE_SIZE);

  const { data, fetchNextPage, isFetching, refetch } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHARACTERS, searchName, searchStatus],
    queryFn: ({ pageParam }) =>
      CharacterService.getAll(pageParam, searchName, searchStatus),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.info.next) return undefined;
      return allPages.length + 1;
    },
  });

  const allCharacters = data?.pages.flatMap(page => page.results) ?? [];

  React.useEffect(() => {
    setVisibleCount(INITIAL_PAGE_SIZE);
  }, [searchName, searchStatus]);

  const characters = allCharacters.slice(0, visibleCount);

  const handleEndReached = () => {
    if (visibleCount >= allCharacters.length) {
      fetchNextPage();
    }

    // Show 5 at a time until the first 20 are visible, then match the API page size (20)
    setVisibleCount(prev =>
      prev < API_PAGE_SIZE ? prev + INITIAL_PAGE_SIZE : prev + API_PAGE_SIZE,
    );
  };

  return (
    <HomeComponent
      characters={characters}
      onEndReached={handleEndReached}
      isLoading={isFetching}
      searchStatus={searchStatus}
      onSearchNameChange={setSearchName}
      onSearchStatusChange={setSearchStatus}
      onRefresh={refetch}
    />
  );
};

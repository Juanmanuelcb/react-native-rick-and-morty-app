import { useInfiniteQuery } from '@tanstack/react-query';
import * as React from 'react';
import { CharacterService } from '../../api/client';
import { QUERY_KEYS } from '../../api/keys';
import { CharacterStatus } from '../../api/models';
import { HomeComponent } from './HomeComponent';

export const HomeScreen = () => {
  const [searchName, setSearchName] = React.useState<string>();
  const [searchStatus, setSearchStatus] = React.useState<CharacterStatus>();

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHARACTERS, searchName, searchStatus],
    queryFn: ({ pageParam }) =>
      CharacterService.getAll(pageParam, searchName, searchStatus),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.info.next) return undefined;
      return allPages.length + 1;
    },
  });

  const characters = data?.pages.flatMap(page => page.results) ?? [];

  return (
    <HomeComponent
      characters={characters}
      onEndReached={fetchNextPage}
      isLoading={isFetching}
      searchStatus={searchStatus}
      onSearchNameChange={setSearchName}
      onSearchStatusChange={setSearchStatus}
    />
  );
};

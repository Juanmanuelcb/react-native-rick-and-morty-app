import { useInfiniteQuery } from '@tanstack/react-query';
import * as React from 'react';
import { CharacterService } from '../../api/client';
import { QUERY_KEYS } from '../../api/keys';
import { HomeComponent } from './HomeComponent';
import { CharacterStatus } from '../../api/models';

export const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<CharacterStatus | null>(null);

  const {
    data,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.CHARACTERS],
    queryFn: ({ pageParam }) => CharacterService.getAll(pageParam),
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
    />
  );
};

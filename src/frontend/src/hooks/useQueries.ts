import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Book, SearchResult } from "../backend";
import { useActor } from "./useActor";

export function useAllBooks() {
  const { actor, isFetching } = useActor();
  return useQuery<Book[]>({
    queryKey: ["books"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBooks();
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useBook(abbreviation: string | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Book | null>({
    queryKey: ["book", abbreviation],
    queryFn: async () => {
      if (!actor || !abbreviation) return null;
      return actor.getBook(abbreviation);
    },
    enabled: !!actor && !isFetching && !!abbreviation,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useVerses(
  bookAbbreviation: string | null,
  chapterNumber: bigint | null,
) {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["verses", bookAbbreviation, chapterNumber?.toString()],
    queryFn: async () => {
      if (!actor || !bookAbbreviation || chapterNumber === null) return [];
      return actor.getVerses(bookAbbreviation, chapterNumber);
    },
    enabled:
      !!actor && !isFetching && !!bookAbbreviation && chapterNumber !== null,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSearchVerses(keyword: string) {
  const { actor, isFetching } = useActor();
  return useQuery<SearchResult[]>({
    queryKey: ["search", keyword],
    queryFn: async () => {
      if (!actor || !keyword.trim()) return [];
      return actor.searchVerses(keyword);
    },
    enabled: !!actor && !isFetching && keyword.trim().length >= 2,
    staleTime: 1000 * 60,
  });
}

export function useSeedBibleData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (books: Book[]) => {
      if (!actor) throw new Error("No actor available");
      await actor.seedBibleData(books);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
  });
}

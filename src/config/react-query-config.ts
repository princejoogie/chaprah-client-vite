import { QueryClient } from 'react-query';

const ONE_MINUTE = 60000;

/**
 * Global Handling Error
 * @param error: error form server
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
function useErrorHandler() {}

export function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: ONE_MINUTE * 5, // 5 minutes
        cacheTime: ONE_MINUTE * 5, // 5 minutes
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        onError: useErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();

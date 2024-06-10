export function skeletonGenerator<T>(results: T[], loading: boolean) {
  const dummyElement = {} as T;

  let array = results;

  if (loading) {
    // assign dummy data on loading state
    array = Array.from(Array(5).keys()).map((ind) => {
      return {
        ...dummyElement,
        id: ind,
        isLoading: true,
      };
    });
  }

  return array;
}

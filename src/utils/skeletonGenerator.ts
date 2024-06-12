export function skeletonGenerator<T>(results: T[], loading: boolean) {
  const dummyElement = {} as T;

  const array = [...results];

  if (loading) {
    // assign dummy data on loading state
    const skeletonArray = Array.from(Array(5).keys()).map((ind) => {
      return {
        ...dummyElement,
        id: ind,
        isLoading: true,
      };
    });

    array.push(...skeletonArray);
  }

  return array;
}

export const compose =
  (...fns: any[]) =>
  (arg: any) =>
    fns.reduce((i, f) => f(i), arg);

export const getImage = (
  postType: 'movie' | 'series',
  id: string,
  fileName: string
) =>
  postType === 'movie'
    ? `/images/movies/${id}/${fileName}`
    : `/images/series/${id}/${fileName}`;

export const compose =
  (...fns: any[]) =>
  (arg: any) =>
    fns.reduce((i, f) => f(i), arg);

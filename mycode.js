// @flow

type P = {
  a: string,
};

type M = $ObjMap<P, <V>(V) => () => V>;
const m: M = {
  a: () => true,
};

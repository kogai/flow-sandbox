// @flow

type P = {
  a: string,
  b: number,
};

type M = $ObjMap<P, <V>(V) => () => V>;

({
  a: () => "",
  b: () => "0",
}: M);

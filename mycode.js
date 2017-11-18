type P = {
  a: string,
  b: number,
};

({
  a: "",
  b: 0,
}: $ObjMap<P, <V>(V) => V>);

({
  a: () => "",
  b: () => "0",
}: $ObjMap<P, <V>(V) => () => V>);

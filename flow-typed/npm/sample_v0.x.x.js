import * as React from 'react';

declare module "sample" {
  declare export type T = React.ComponentType<*>;
  declare export type U = number;
}

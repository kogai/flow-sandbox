import * as React from "react";
import type {T, U} from 'sample';

const t: T = ""; // Expect error here.
const u: U = ""; // Expect error here too, and actualy error occured correctory.
const v: React.ComponentType<*> = ""; // And error occured correctory here too.

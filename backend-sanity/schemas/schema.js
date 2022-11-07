import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import classes from "./class";
import gender from "./gender";
import race from "./race";
import role from "./role";
import spec from "./spec";
import faction from './faction';


export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    classes,
    faction,
    gender,
    race,
    role,
    spec
  ]),
});

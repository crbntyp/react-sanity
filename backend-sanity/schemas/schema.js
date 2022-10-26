import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import portfolioEntries from "./portfolioEntries";
import portfolioCategories from "./portfolioCategories";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([portfolioEntries, portfolioCategories]),
});

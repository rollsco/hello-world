const {
  writeToFileAsList,
  writeToFileAsObject,
} = require(`./services/data/data`);
const baseId = "appklYU85cJ9DTTD9";

writeToFileAsList({ baseId, table: "sections", view: "grid" });

writeToFileAsObject({
  baseId,
  table: "products",
  view: "grid",
  key: "id",
  downloads: ["image"],
});

writeToFileAsObject({
  baseId,
  table: "variants",
  view: "grid",
  key: "id",
  downloads: ["image"],
});

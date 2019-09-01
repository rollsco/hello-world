export const get = (endpoint, params, options) => {
  const route = `${process.env.REACT_APP_API_ROUTE}/${endpoint}`;

  // TODO everything. Sorry.

  if (endpoint === "sections") {
    return [
      {
        name: "¡promociones!",
        color: "rgb(50,150,0)",
        products: [
          { name: "one", price: 8 },
          { name: "two", price: 14 },
          { name: "one", price: 8 },
          { name: "two", price: 14 },
          { name: "one", price: 8 },
          { name: "two", price: 14 },
          { name: "one", price: 8 },
          { name: "two", price: 14 },
          { name: "one", price: 8 },
          { name: "two", price: 14 }
        ]
      },
      {
        name: "rolls",
        color: "rgb(50,50,0)",
        products: [
          { name: "other", price: 8 },
          { name: "peter", price: 14 },
          { name: "other", price: 8 },
          { name: "peter", price: 14 },
          { name: "other", price: 8 },
          { name: "peter", price: 14 },
          { name: "other", price: 8 },
          { name: "peter", price: 14 },
          { name: "other", price: 8 },
          { name: "peter", price: 14 }
        ]
      },
      {
        name: "bowls",
        color: "rgb(150,50,0)",
        products: [
          { name: "some", price: 8 },
          { name: "anchor", price: 14 },
          { name: "some", price: 8 },
          { name: "anchor", price: 14 },
          { name: "some", price: 8 },
          { name: "anchor", price: 14 },
          { name: "some", price: 8 },
          { name: "anchor", price: 14 },
          { name: "some", price: 8 },
          { name: "anchor", price: 14 }
        ]
      },
      {
        name: "pokes",
        color: "rgb(50,150,50)",
        products: [
          { name: "victoria", price: 8 },
          { name: "guakamole", price: 14 },
          { name: "victoria", price: 8 },
          { name: "guakamole", price: 14 },
          { name: "victoria", price: 8 },
          { name: "guakamole", price: 14 },
          { name: "victoria", price: 8 },
          { name: "guakamole", price: 14 },
          { name: "victoria", price: 8 },
          { name: "guakamole", price: 14 }
        ]
      },
      {
        name: "menú infantil : )",
        color: "rgb(150,50,50)",
        products: [
          { name: "yellow", price: 8 },
          { name: "minister", price: 14 },
          { name: "yellow", price: 8 },
          { name: "minister", price: 14 },
          { name: "yellow", price: 8 },
          { name: "minister", price: 14 },
          { name: "yellow", price: 8 },
          { name: "minister", price: 14 },
          { name: "yellow", price: 8 },
          { name: "minister", price: 14 }
        ]
      },
      {
        name: "spring rolls vegetarianos",
        color: "rgb(50,0,150)",
        products: [
          { name: "marina", price: 8 },
          { name: "motown", price: 14 },
          { name: "marina", price: 8 },
          { name: "motown", price: 14 },
          { name: "marina", price: 8 },
          { name: "motown", price: 14 },
          { name: "marina", price: 8 },
          { name: "motown", price: 14 },
          { name: "marina", price: 8 },
          { name: "motown", price: 14 }
        ]
      },
      {
        name: "bebidas",
        color: "rgb(150,150,50)",
        products: [
          { name: "mesina", price: 8 },
          { name: "roll", price: 14 },
          { name: "mesina", price: 8 },
          { name: "roll", price: 14 },
          { name: "mesina", price: 8 },
          { name: "roll", price: 14 },
          { name: "mesina", price: 8 },
          { name: "roll", price: 14 },
          { name: "mesina", price: 8 },
          { name: "roll", price: 14 }
        ]
      }
    ];
  } else {
    return [];
  }
};

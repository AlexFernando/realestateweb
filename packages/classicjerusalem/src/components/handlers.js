const propertiesHandler = {
  name: "properties",
  priority: 10,
  pattern: "/properties",
  func: async ({ route, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "/properties/",
      params: { _fields: "id" },
    });
    const items = await response.json();

    const data = state.source.data[route];
    Object.assign(data, {
      items: items.map((item) => ({
        id: item.id,
        type: "property",
      })),
      isReady: true,
      isPropertyArchive: true,
    });

    items.forEach((item) => {
      state.source.property[item.id] = item;
    });
  },
};



export { propertiesHandler };

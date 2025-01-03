export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "home.js",
              isFolder: false,
            },
            {
              name: "about.js",
              isFolder: false,
            },
          ],
        },
        {
          name: "pages",
          isFolder: true,
          items: [],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "assets",
          isFolder: true,
          items: [
            {
              name: "logo",
              isFolder: false,
            },
            {
              name: "hero",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};

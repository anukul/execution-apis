// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  referenceSidebar: [
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "reference/methods" },
      items: [
        {
          type: 'doc',
          label: 'API Methods',
          id: "reference/methods"
        }
      ],
    }
  ],
};

module.exports = sidebars;

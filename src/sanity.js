const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "p2bdzhxh",
  dataset: "projects",
  useCdn: false
});

export default client;

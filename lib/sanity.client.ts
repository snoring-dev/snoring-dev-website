import { SanityClient, createClient } from "next-sanity";

declare global {
  var sanityClient: SanityClient | undefined;
}

const sanityClient =
  globalThis.sanityClient ||
  createClient({
    projectId: "odo9cmzr",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.sanityClient = sanityClient;
}

export default sanityClient;

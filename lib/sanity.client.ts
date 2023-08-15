import { SanityClient, createClient } from "next-sanity";

declare global {
  var sanityClient: SanityClient | undefined;
}

const sanityClient =
  globalThis.sanityClient ||
  createClient({
    projectId: "odo9cmzr",
    dataset: "production",
    apiVersion: "2023-08-15",
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.sanityClient = sanityClient;
}

export default sanityClient;

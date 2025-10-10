import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Asset } from "@/cms/collections/Asset";
import { News } from "@/cms/collections/News";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";

// Todo: Setup Env variables at Vercel.
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || "";
const DATABASE_URI = process.env.DATABASE_URI || "";
const BLOB_STORAGE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
// const PAYLOAD_ENV = process.env.PAYLOAD_ENV || "";

export default buildConfig({
  secret: PAYLOAD_SECRET,
  db: mongooseAdapter({ url: DATABASE_URI }),
  sharp,
  editor: lexicalEditor(), // If you'd like to use Rich Text, pass your editor here
  graphQL: { disable: true },
  // admin: {
  //   autoLogin:
  //     PAYLOAD_ENV === "LOCAL"
  //       ? {
  //           email: "test@example.com",
  //           password: "test",
  //           prefillOnly: true,
  //         }
  //       : false,
  // },
  collections: [Asset, News],
  plugins: [
    vercelBlobStorage({
      token: BLOB_STORAGE_TOKEN,
      enabled: true,
      collections: {
        asset: true,
      },
    }),
  ],
});

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { pl } from "@payloadcms/translations/languages/pl";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { News } from "./collections/News";
import { Galleries } from "./collections/Galleries";
import { MemorialPlaces } from "./collections/MemorialPlaces";
import { Rallies } from "./collections/Rallies";
import { Calendar } from "./collections/Calendar";
import { Literature } from "./collections/Literature";
import { Biograms } from "@/collections/Biograms";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      actions: ["@/components/PayloadBackButton"],
    },
  },
  localization: {
    defaultLocale: "pl",
    locales: ["pl"],
    fallback: true,
  },
  i18n: {
    fallbackLanguage: "pl",
    supportedLanguages: { pl },
  },
  collections: [
    Users,
    Media,
    News,
    Galleries,
    Calendar,
    Literature,
    Rallies,
    Biograms,
    MemorialPlaces,
  ],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures],
  }),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
});

import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: "dix9ia3hk",
  api_key: "335135889726636",
  api_secret: "56wfQdnrbeqsQOkVs_cl2i724gU",
});

export default cloudinary;

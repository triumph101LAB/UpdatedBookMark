// import { registerAs } from "@nestjs/config";
// export default registerAs('app', () =>({

//     dburi: process.env.DR_URL ,
//     secret: process.env.KEY

// }));

import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME,
  port: process.env.APP_PORT || 3000,
  dbUri: process.env.DB_URI,
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  termiiSenderId: process.env.TERMII_SENDER_ID,
  termiiAPIKey: process.env.TERMII_API_KEY,
  emailPort: process.env.EMAIL_PORT || 0,
  emailUsername: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailHost: process.env.EMAIL_HOST,
  appBaseUrl: process.env.APP_BASE_URL,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  paystackUrl: process.env.PAYSTACK_URL,
  paystackSK: process.env.PAYSTACK_SK,
  paystackPK: process.env.PAYSTACK_PK,
  cloudRegion: process.env.AWS_REGION,
  cloudAKID: process.env.AWS_ACCESS_KEY_ID,
  cloudSAK: process.env.AWS_SECRET_ACCESS_KEY,
  cloudBN: process.env.AWS_BUCKET_NAME,
}));

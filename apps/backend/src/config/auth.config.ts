export const config = {
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  jwtPublicKey: process.env.JWT_PUBLIC_KEY,
};

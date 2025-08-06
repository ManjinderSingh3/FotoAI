import rateLimit from "express-rate-limit";

export const trainModelRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 24 hours
  max: 5, // 5 requests per 24 hours
  message: "Too many training requests, please try again later",
});

export const imageRateLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10, //10 requests per minute
  message: "Too many image generation requests, please try again later",
});

// GPU heavy task to generate pack of images. SO number of requests per minute are less.
export const packRateLimiter = rateLimit({
  windowMs: 60 * 1000, //1 minute
  max: 2,
  message: "Too many pack generation requests, please try again later",
});

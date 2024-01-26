import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ 
        filename: "public/app.log"
    }),
  ],
});

export { logger };

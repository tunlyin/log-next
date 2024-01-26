import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ 
        filename: "/var/log/log-next/app.log"
    }),
  ],
});

export { logger };
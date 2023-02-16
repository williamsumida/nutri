import pino from "pino";

export default pino({
  enabled: process.env.LOGGER_ENABLED == 'true' ? true : false,
  level: process.env.LOGGER_LEVEL
});


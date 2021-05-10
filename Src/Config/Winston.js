import { createLogger, format, transports } from 'winston';
import { existsSync, mkdirSync } from 'fs';
import 'winston-daily-rotate-file';

import { 
    LoggingDir,
    EnvMode } from './Settings';

const env = EnvMode || 'development';
const LoggingLevel = env === 'production' ? 'info' : 'debug';

// Create the log directory if it does not exist
if (!existsSync(LoggingDir))
{
    mkdirSync(LoggingDir);
}

// Winston templates for different transporters.
const logger = createLogger({
    format: format.combine(
        format.timestamp({
            format: 'ddd, D MMM YYYY h:m:s A',
        }),
    ),
    transports: [
        new transports.Console({
            level: LoggingLevel,
            format: format.combine(
                format.colorize(),
                format.printf((log) => `[${log.timestamp}][${log.level}]: ${log.message}`),
            ),
        }),
        new transports.DailyRotateFile({
            level: LoggingLevel,
            frequency: '6h',
            datePattern: 'D-M-YYYY', // 11-1-2021 1:50 PM
            filename: '%DATE%.log',
            dirname: LoggingDir,
            format: format.combine(
                format.printf((log) => `[${log.timestamp}][${log.level}]: ${log.message}`),
            ),
            handleExceptions: true,
            maxsize: 5242880, // 5 MB
            maxFiles: '7d',
            colorize: false,
        }),
    ],
    exitOnError: false,
});

export default logger;
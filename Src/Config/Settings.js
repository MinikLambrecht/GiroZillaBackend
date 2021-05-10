require('dotenv').config(); // Package to secure easier access to the .env file

// Application Related
export const AppPort = process.env.PORT;
export const EnvMode = process.env.NODE_ENV;

// Security Related
export const JWTSecret = process.env.JWT_SECRET; // 2048-bit secret

// Database Related
export const DBDialect = process.env.DB_DIALECT;
export const DBHost = process.env.DB_HOST;
export const DBPort = process.env.DB_PORT;
export const DBUser = process.env.DB_USER;
export const DBPass = process.env.DB_PASS;
export const DBName = process.env.DB_NAME;
export const DBPoolMax = process.env.DB_POOL_MAX;
export const DBPoolMin = process.env.DB_POOL_MIN;
export const DBPoolAquire = process.env.DB_POOL_ACQUIRE;
export const DBPoolIdle = process.env.DB_POOL_IDLE;

export const SrvDBDialect = process.env.SRV_DB_DIALECT;
export const SrvDBHost = process.env.SRV_DB_HOST;
export const SrvDBPort = process.env.SRV_DB_PORT;
export const SrvDBUser = process.env.SRV_DB_USER;
export const SrvDBPass = process.env.SRV_DB_PASS;
export const SrvDBName = process.env.SRV_DB_NAME;
export const SrvDBPoolMax = process.env.SRV_DB_POOL_MAX;
export const SrvDBPoolMin = process.env.SRV_DB_POOL_MIN;
export const SrvDBPoolAquire = process.env.SRV_DB_POOL_ACQUIRE;
export const SrvDBPoolIdle = process.env.SRV_DB_POOL_IDLE;

// Directories
export const LoggingDir = EnvMode === 'production' ? `${__dirname}/Logs` : 'Src/Logs';
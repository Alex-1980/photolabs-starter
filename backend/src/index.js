const PORT = process.env.PORT || 8001;

const pg = require('pg')

const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || "",

  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,

  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});

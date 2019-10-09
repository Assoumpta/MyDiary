import pg from 'pg';

const config = {
  user: 'postgres', 
  database: 'Mydiary',
  password: '123',
  port: 5432,
  max: 10, 
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('It is connected to the Database');
});

const createTables = () => {
    const schoolTable = `CREATE TABLE IF NOT EXISTS
        Entries(
          id INTEGER PRIMARY KEY,
        Entry_title VARCHAR(128) NOT NULL,
        Entry_message VARCHAR NOT NULL
          
        )`;
    pool.query(schoolTable)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };

  pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
  });
  
  
  module.exports = {
    createTables,
    pool,
  };
  
  require('make-runnable');

import { Pool } from 'pg';

const done = {
  user: 'postgres', 
  database: 'Mydiary',
  password: '123',
  port: 5432,
};

const pool = new Pool(done);

pool.on('connect', () => {
  console.log('It is connected to the Database');
});

const createTables = () => {
    const entryTable = `CREATE TABLE IF NOT EXISTS
        allentries(
        id SERIAL PRIMARY KEY,
        entry_title VARCHAR(12) NOT NULL,
        entry_message VARCHAR(20) NOT NULL
        )`;

        const signuptable = `CREATE TABLE IF NOT EXISTS
        signuptable(
          email VARCHAR(140) NOT NULL,
          username VARCHAR(120) NOT NULL,
          password VARCHAR(100) NOT NULL
          
        )`;
        const query = `${entryTable};${signuptable}`;
  
   pool.query(query).then((res) => {
           console.log(res);
           pool.end();
       })
          .catch((err) => {
            console.log(err);
            pool.end();
          });
      };
     
      export { createTables, pool };
       
      
      require('make-runnable');

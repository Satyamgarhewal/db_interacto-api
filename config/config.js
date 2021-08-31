const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'learning',
  password: 'satyam@123',
  port: '5432',
});

const getUsers = (request, response) => {
  console.log('req body >>>>>>>>', request.body);
  pool.query(
    'Select * from public.user_master_info order by id asc',
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

module.exports = {
  getUsers,
};

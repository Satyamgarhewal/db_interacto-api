const { Pool } = require('pg').Pool;

const getUsers = (request, response) => {
  Pool.query(
    'Select * from public.user_master_info order by id asc',
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

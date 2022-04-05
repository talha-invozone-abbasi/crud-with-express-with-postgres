const pool = require("../config/db");
const db = require("../config/db");

const getUser = (req, res) => {
  db.query("select * from users order by id asc", (err, result) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    res.json(result.rows).status(200);
  });
};

const connectOne = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  db.query("select * from users where id=$1", [id], (err, result) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    res.json(result.rows).status(200);
  });
};

const createUser = (req, res) => {
  const { id, name, email } = req.body;
  pool.query(
    "insert into users(id,name,email) values($1,$2,$3)",
    [id, name, email],
    (err, result) => {
      if (err) {
        return res.status(404).json({ error: err });
      }
      res.json(`user inserted with ${result.insertId}`).status(201);
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  pool.query(
    "update users set name=$1 ,email =$2 where id =$3",
    [name, email, id],
    (err, result) => {
      if (err) {
        return res.status(404).json({ error: err });
      }
      res.json(`user inserted with ${id}`).status(201);
    }
  );
};
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("delete from users where id=$1", [id], (err, resutl) => {
    if (err) err;
    res.status(202).json("Deleted");
  });
};

module.exports = {
  getUser,
  connectOne,
  createUser,
  updateUser,
  deleteUser,
};

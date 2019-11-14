const db = require("../../database/dbConfig");

module.exports = {
  find,
  findById,
  findByUsername,
  add,
  remove
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findByUsername(username) {
  return db("users")
    .where({ username })
    .first();
}

async function add(user) {
  const [newUser] = await db("users")
    .insert(user)
    .returning("*");

  return newUser;
}

function remove(id) {
  return db("users")
    .where(id)
    .del();
}

const mysql = require("mysql");
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "chatroom"
});

let chatroomdb = {};

chatroomdb.all = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT content FROM responses ORDER BY RAND();", function(
      error,
      results,
      fields
    ) {
      if (error) return reject(error);
      return resolve(results);
    });
  });
};

chatroomdb.insert = message => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO sending(content) VALUES ('${message.content}');`,
      function(error, results, fields) {
        if (error) return reject(error);
        return resolve(results);
      }
    );
  });
};

module.exports = chatroomdb;

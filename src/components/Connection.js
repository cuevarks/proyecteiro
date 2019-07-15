var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chatroom"
});

connection.query("SELECT content FROM responses;", function(
  error,
  results,
  fields
) {
  if (error) throw error;
  return results[Math.floor(Math.random() * 7)].content;
});

// export default function getResponses() {

// }

// export default function sendMessages(content) {connection.query(
//     `INSERT INTO sending(content); VALUES (${content});`
//   );}

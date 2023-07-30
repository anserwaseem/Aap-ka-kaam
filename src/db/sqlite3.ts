// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./db.db");
// // db.serialize(() => {
// //   // db.each("select * from TestTable", (err, row) => {
// //   //   if (err) {
// //   //     console.log("db.each error: ", err);
// //   //   } else {
// //   //     console.log("db.each row: ", row);
// //   //   }
// //   // });
// //   db.all("select * from TestTable", (err, rows) => {
// //     if (err) {
// //       console.log("db.all error: ", err);
// //     } else {
// //       console.log("db.all rows: ", rows);
// //     }
// //   });
// // });

// export function getNames() {
//   // return new Promise((resolve, reject) => {
//   //   db.all("select * from TestTable", (err: any, rows: any) => {
//   //     if (err) {
//   //       console.log("db.all error: ", err);
//   //       reject(err);
//   //     } else {
//   //       console.log("db.all rows: ", rows);
//   //       resolve(rows);
//   //     }
//   //   });
//   // });

//   // const query = "select * from TestTable";
//   // const statement = await db.prepare(query);
//   // console.log("getNames statement: ", statement);
//   // const result = await statement.all();
//   // console.log("getNames result: ", result);
//   // return result;

//   db.serialize(() => {
//     db.all("select * from TestTable", (err: any, rows: any) => {
//       if (err) {
//         console.log("db.all error: ", err);
//       } else {
//         console.log("db.all rows: ", rows);
//         return rows;
//       }
//     });
//   });
// }
// // getNames();

// export function getSystemVersion() {
//   return process.getSystemVersion();
// }

// // db.close();

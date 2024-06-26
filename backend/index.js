//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

// //PORT
// app.listen(5000, () => {
//   console.log("success");

// });

app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
  

export default app;

  
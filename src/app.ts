import path from "path";

import express = require("express");
import bodyParser = require("body-parser");

import rootDir from "./utils/path";
import {router as homeRouter} from './routes/home';

const app = express();

app.set("view engine", "ejs");
app.set("views", "dist/views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(
    express.static(path.join(rootDir, "..", "node_modules", "jquery", "dist"))
);
app.use(
    express.static(
        path.join(rootDir, "..", "node_modules", "bootstrap", "dist", "js")
    )
);
app.use(
    express.static(
        path.join(rootDir, "..", "node_modules", "bootstrap", "dist", "css")
    )
);

app.use(homeRouter);
app.listen(3000);

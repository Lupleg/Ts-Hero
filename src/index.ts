import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(cors({
    // origin: 'http://localhost:3000',
    credentials: true
    }));

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(8080, () =>{
    console.log('server is running on http://localhost:8080');
})


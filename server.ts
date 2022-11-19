import express, {Application} from 'express';
import cors from 'cors';
import routes from './routes/app.routes';
import { pathConstants } from './models/constants';

class Server {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(pathConstants.API, routes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server started at', this.port);
        })
    }
}

export default Server;
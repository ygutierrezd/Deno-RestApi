import { App, Router, Request, Response } from "https://deno.land/x/attain/mod.ts";

/*Cnfiguración de las rutas o capacidades*/
const api = new Router();

api.get('/', (req : Request, res : Response) => {
    res.status(200).send({ status: 'Deno running!' });
})

api.get('/:id', (req, res) => {
    res.status(200).send({ param: req.params.id });
})

/*Configuracion de la aplicación*/
const env  = Deno.env.toObject();
const app = new App();
const PORT = Number(env.PORT) || 3000;
app.use('/api', api);

app.listen({port : PORT});

# ngrok-express-setup

**Exposing local Express.js server to the internet via ngrok.**


## Purpose 

* Make testing webhooks locally to integrate third party systems with ease.

* Tunnel local web server to the internet.


## Steps

> Clone/Download this repository.

> Run npm install and start the app.

```shell
$ npm install
$ node index.js
```

> Download [ngrok](https://ngrok.com/download) and unzip.

> Start ngrok service on port 8000 or the port on which you are running your local web server.

```shell
$ ./ngrok http 8000
```

- Once the ngrok service is up and running, you can use the provided link by ngrok to use local web app anywhere from the internet. 



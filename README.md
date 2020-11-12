This is SPA for showcasing my portfolio created with React app

### Hosted URL 
AWS EC2 and Route 53 <br />
[http://portfolio.ssbswang.io](http://portfolio.ssbswang.io)

### Development Mode
### 1. via npm
- run `npm start`
- open [http://localhost:3000](http://localhost:3000) 

### 2. via Docker
- run `docker build -t ssbswang-portfolio:dev`
- then `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3333:3000 -e CHOKIDAR_USEPOLLING=true ssbswang-portfolio:dev`
- open [http://localhost:3333](http://localhost:3333)
- note: docker-compose is currently for AWS only; feel free to adjust it accordingly

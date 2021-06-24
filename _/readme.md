1 Clear NPM's cache:
sudo npm cache clean -f
2 Install a little helper called 'n'
sudo npm install -g n
3 Install latest stable Node.js version
sudo n stable


https://angular.io/cli
Lanzar proyecto:
ng serve -o

Crear componente:
ng g c pages/portfolio --skip-tests=true
   | |                  |
   | |                  Evitamos fichero test
   | Component
   generate

Crear servicios:
ng g s services/infoPagina --skip-tests=true


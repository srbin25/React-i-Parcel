# React-i-Parcel
Pokusaj izrade vebaplikacije tehnologijom node react uz upotrebu Parcela, ali kao i uvek 
svuda ostaju neki problemi koje novatori i konstruktori ili ne prikazu ili ostave ne dodrecene.
Parcel radi dobro razvojnom nacinu rada ,dok razvijate samu aplikaciju, ali kada se treba 
ista napraviti kao finalna i kao takvu postaviti na server pojavljuju se manji problemi.
Na primer nisu tacne putanje do failova, ili do css-a i slicno. Pa je potrebno dosta toga pretraziti na netu.

Princip rad je dosta lagan i izgleda ovako.
1. Napravi se projektni folder
2. pokrene komanda npm init -y  koja izradjuje package.json fail
3. Ako niste u projektnom folderu predjite u njega upotrebom komande CD ciljni folder
4. Otvorite u editoru koda izradjeni fail package.json i doatje sledce redove:

"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./",
    "production": "parcel  index.html --out-dir produkcija"
  },
  
  5. ako upotrebljavate react i boostrap pored parcela unesite ovaj kod:
  npm install -D bootstrap react-strap parcel-bundler jquery  proper 
  da biste instalisali potrebne pakete za razvoj.
  6. instaliste paket parcela kao zavistan
 
  npm install --save parcel
  
  Da b iste  to jendostavnije uradili prekopiraje u svoj projekt folder za ucenje ili rad sadrzaj mog packagejson file 
  {
  "name": "NoviProjekt",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./",
    "production": "parcel  index.html --out-dir produkcija"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "parcel": "^1.12.4",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0"
  },
  "devDependencies": {
    "bootstrap": "^4.5.0",
    "jquery": "^3.5.1",
    "parcel-bundler": "^1.12.4",
    "popper.js": "^1.16.0",
    "proper": "^0.5.1",
    "react-strap": "0.0.1"
  }
}
 i pokrenite npm i ili npm install
 U projekt foderu napravite sledece failove:
 1. index.html 
 2. index.js
 To je minimum koji vam treba u radu da bi ste videli kako Parcel radi.
 Ostalo potrebno zavisi ce od potreba vase aplikacije ili zahteva narucioca. 
 

dist je osnovni ili standardni izlazni folder za Parcel Bundler, ali izlazni direktorijum se moze psotaviti upotrebom -d znakom.

na primer parcel build src/index.html -d build --public-url . Gde ce te i dobiti staticke failove u tom direktorijumu. 

 # React-and-Parcel
An attempt to create a web application with node react technology using Plots, but as always
everywhere there remain some problems which innovators and constructors either do not present or leave unspecified.
The plot works well in development mode while developing the application itself, but when needed
make the same as final and as such set up on the server there are minor problems.
For example, the paths to files, or to css and the like are not correct. So you need to search a lot on the net.

The working principle is quite easy and it looks like this.
1. Create a project folder
2. run the npm init -y command which creates package.json fail
3. If you are not in the project folder, navigate to it using the target folder CD command
4. Open the failed package.json created in the code editor and add the following lines:

"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./",
    "production": "parcel index.html --out-dir production"
  },
  
  5. if you use react and boostrap next to the plots enter this code:
  npm install -D bootstrap react-strap parcel-bundler jquery proper
  to install the necessary development packages.
  6. Install a package plot as envious
 
  npm install --save parcel
  
  To make it easier, copy the contents of my packagejson file to your project folder for learning or work
  {
  "name": "NewProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --public-url ./",
    "production": "parcel index.html --out-dir production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "parcel": "^ 1.12.4",
    "react": "^ 16.13.1",
    "react-dom": "^ 16.13.1",
    "react-router-dom": "^ 5.2.0"
  },
  "devDependencies": {
    "bootstrap": "^ 4.5.0",
    "jquery": "^ 3.5.1",
    "parcel-bundler": "^ 1.12.4",
    "popper.js": "^ 1.16.0",
    "proper": "^ 0.5.1",
    "react-strap": "0.0.1"
  }
}
 and run npm and or npm install
 Create the following files in the project folder:
 1. index.html
 2. index.js
 That is the minimum you need in your work to see how the Plot works.
 Other needs will depend on the needs of your application or the requirements of the customer.

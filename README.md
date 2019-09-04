# Oddam w dobre ręce

"Oddam w dobre ręce" is a simple single-page web app created in React as part of the Portfolio Lab Project.

The goal of the project was to create a sample page where everyone can give unnecessary items to trusted institutions. 
The process of donating things is simple, a Person has to register in the database with his/her email and after that fill a donation form.

## Project structure

### Home screen
<div align="center"><img src="https://github.com/mbojec/good-hands/blob/development/screenshots/Home.png?raw=true" width="100%"/></div>

### Form screen
<div align="center"><img src="https://github.com/mbojec/good-hands/blob/development/screenshots/Form.png?raw=true" width="100%"/></div>

### Registration panel
<div align="center"><img src="https://github.com/mbojec/good-hands/blob/development/screenshots/Register.png?raw=true" width="100%"/></div>

## Building project

### Firebase

This project uses Firebase auth and realtime database so to use it first you have create your own Firebase account 
and pass the provide key's to ```.env``` file like this:
````
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
````

### Installation

"Oddam w dobre ręce" requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd goodhands
$ npm install -d
$ npm start
```

For development...

```sh
$ npm run start
```

For production...

```sh
$ npm run build
```


## License

Copyright 2019 mbojec

   Licensed under the Apache License, Version 2.0 (the "License") you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

   Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

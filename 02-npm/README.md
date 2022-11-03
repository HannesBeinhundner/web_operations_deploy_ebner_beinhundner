# Assignment 02-npm

In this assignment you will learn to initialize a project with npm, install packages and how to use a linter.

## 1. Initializing a project

Make sure you have nvm, Node.js and npm installed. Node.js can be installed with nvm which can be installed with brew. Make sure the commands ´node -v´ and ´npm -v´ work.

Initialize a new project with `npm init`.

You can name the project however you want.

The code for this exercise is from our Chat App exercise from the last semester. You need a **index.js** and **test.js** file in your root directory and an **index.html** in a folder called **/public**. You can copy the content from the files in this repo.

Commit to your repo.

## 2. Installing the first dependencies

For the code of our chat app to work we need 3rd party code, to be specific `express` to create a server and `socket.io` as well as `socket.io-client` for the websocket connection to work.

### Install 3 packages locally with their latest versions

- express
- socket.io
- socket.io-client

Test if the code works by using the command `node index.js` in your terminal. You should be able to visit localhost:5555 and use the chat.

Make sure that this installed packages are not commited to your repo!

Commit to your repo.

## 3. Add a new script

`node index.js` is used to run the file `index.js` using Node.js. Create a new script in your package.json that runs this command when we use `npm run start` in the terminal. Test if this works.

Commit to your repo.

## 4. Running the tests

You might wonder what the test.js file is for. It contains tests for the websocket connection (code is copied from the official socket.io website). To run this code we need a famous testing library called **jest**. This package is only used in development.

### Install a package locally with it's latest version used in development

- jest

You can test if this works by using the command `npx jest test.js`. We use **npx** here because we haven't installed jest globally. npx checks if there is a package for this command installed locally before it checks if it is available globally. If both are false, npx installs the package in the npm cache.

If this was successful you can defince a new script called `test` that runs the command above if you use `npm run test`. Pro tip: you do not need `npx` in your script. Scripts who are run automaticaly have the same behavior as using `npx`.

Commit to your repo.

## 5. Using a linter

In this example we are using `eslint`. This package is also only used in development. After installing you need to initialize `eslint`.

### Install a package locally with it's latest version used in development

- eslint

To initialize eslint we need the command `npm init @eslint/config`. Answer the questions as followed

```
✔ How would you like to use ESLint? · problems (Answer #2)
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

If this was successful, you should be able to run `npx eslint index.js`. Fix all problems until eslint is happy (no output in the console).

Commit to your repo.

## ...and your done!

![](congrats.gif)

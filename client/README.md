https://aspgems.github.io/teamleadercrm-coding-test-2/

# Install and setup

## Requirements
This project uses:

- [node](https://nodejs.org/es/) (v 8.11.2)
- [webpack](https:webpack.js.org/)
- [babel](https://babeljs.io/)
- [jest](https://facebook.github.io/jest/) for testing
- [eslint](https://eslint.org/) with plugins for:
  - [jest](https://github.com/jest-community/eslint-plugin-jest)
  - [react](https://github.com/yannickcr/eslint-plugin-react)

## Install and running
First, you need to install node. The recommended installation is with [nvm](https://github.com/creationix/nvm)
>If you are using `zsh` you can use the [oh-my-zsh plugin for nvm](https://github.com/robbyrussell/oh-my-zsh/blob/master/lib/nvm.zsh)

Then, install npm libraries
```bash
npm install
```

and start your development server with
```bash
npm run start
```
## npm scripts
|script         |description           |
|---------------|----------------------|
|`npm run start`|Starts your dev server|
|`npm test`     |Runs your tests       |
|`npm lint`     |Runs your linter      |
|`npm run build`|Builds the app        |

# Arboreum

Created using [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth.git). Docs:  [docs.scaffoldeth.io](https://docs.scaffoldeth.io).

## Prerequisites:

- [Node](https://nodejs.org/en/download/) > 16
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
-  [Git](https://git-scm.com/downloads)

## Quick Start

> install and start your 👷‍ Hardhat chain:

```bash
cd scaffold-eth
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
cd scaffold-eth
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```bash
cd scaffold-eth
yarn deploy
```

🔏 Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in `packages/hardhat/deploy`

📱 Open http://localhost:3000 to see the app


🌍 You need an RPC key for testnets and production deployments, create an [Alchemy](https://www.alchemy.com/) account and replace the value of `ALCHEMY_KEY = xxx` in `packages/react-app/src/constants.js` with your new key.

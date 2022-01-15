import { Web3ReactProvider } from "@web3-react/core";
import Web3Provider from "web3";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const injected = new InjectedConnector({ supportedChainIds: [4] });

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const App = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React();

  async function handleMintNftClick() {
    toast.info("You wish!");
  }

  async function handleConnectWalletClick() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function handleDisconnectWalletClick() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      {/* Bootstrap CSS should be at beginning of page */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      ></link>
      <header className="App-header">
        <ToastContainer />
        <h1 className="display-6">A r b o r e u m</h1>
        <img className="mt-3 mb-5" src="tree.png" width="275" height="275" alt="" />
        {active ? (
          <>
            <small>
              connected with <b>{account.substring(0, 4)}...{account.substring(account.length - 4)}</b>
            </small>
            <br />
            <button type="button" onClick={handleMintNftClick} className="btn btn-outline-dark">
              mint nft
            </button>
            <br />
            <button type="button" onClick={handleDisconnectWalletClick} className="btn btn-outline-dark">
              disconnect
            </button>
          </>
        ) : (
          <button type="button" onClick={handleConnectWalletClick} className="btn btn-outline-dark">
            connect your wallet
          </button>
        )}
      </header>
      {/* Bootstrap JS should be at end of page */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}

import { Web3ReactProvider } from "@web3-react/core";
import Web3Provider from "web3";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Web3 from "web3";

const injected = new InjectedConnector({ supportedChainIds: [4, 80001] });
// const CONTRACT_RINKEBY = "0xBBc28A113b2827876E1DdB62494eC9030d7229Ae";
const CONTRACT_MUMBAI = "0xBd770416a3345F91E4B34576cb804a576fa48EB1";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

const App = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  async function handleMintNftClick() {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const { abi } = require("./artifacts/contracts/ArboreumNFTFactory.sol/ArboreumNFTFactory.json");
    const arboreumContract = new web3.eth.Contract(abi, CONTRACT_MUMBAI);
    const tokenURI = "https://bafkreihxf3jhym32l2kerjwnqo3pzppowq6bg3qedvqvj72np4nyxyf67y.ipfs.dweb.link/";
    var tx = arboreumContract.methods.createToken(tokenURI).send({ from: accounts[0] });
    toast.promise(tx, {
      pending: "Minting NFT on the blockchain, please wait...",
      success: "Success! You obtained an Arboreum NFT!",
      error: "Failure! Unable to complete request.",
    });
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
        <div className="mt-2 d-flex justify-content-center" style={{ position: "relative" }}>
          <img src="frame.png" alt="" />
          <div style={{ position: "absolute", top: 200 }}>
            <div id="main">
              <h1 className="display-6">A r b o r e u m</h1>
              <img className="mt-3 mb-5" src="tree.png" width="275" height="275" alt="" />
              {active ? (
                <>
                  <small>
                    <br />
                    connected with{" "}
                    <b>
                      {account.substring(0, 4)}...{account.substring(account.length - 4)}
                    </b>
                  </small>
                  <br />
                  <br />
                  <button type="button" onClick={handleMintNftClick} className="mx-1 btn btn-outline-dark">
                    mint nft
                  </button>
                  <button type="button" onClick={handleDisconnectWalletClick} className="mx-1 btn btn-outline-dark">
                    disconnect
                  </button>
                </>
              ) : (
                <button type="button" onClick={handleConnectWalletClick} className="btn btn-outline-dark">
                  connect your wallet
                </button>
              )}
            </div>
          </div>
        </div>
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

export default function index() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  );
}

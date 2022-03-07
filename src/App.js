import React from "react";
import "./App.css";
import Game from "./game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.game = new Game();
  }

  componentDidMount() {
    setInterval(() => {
      this.game.update();
      this.setState({});
    }, 100);
  }

  update = () => {
    this.game.update();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Cookie Zairox</header>
        <div style={{ marginBottom: "12px" }}>
          Cookie: {this.game.manufacturedCigKofte} <br />
          <button
            disabled={!this.game.canMakeCigKofte()}
            onClick={() => this.game.makeCigKofte()}
          >
            Bake Some
          </button>
        </div>
        <div>
          <div>Business</div>
          <hr />
          <div>
            <table>
              <tr>
                <td style={{ width: "150px" }}>Money:</td>
                <td>{this.game.money}₺</td>
              </tr>
              <tr>
                <td>In Stock:</td>
                <td>{this.game.currentCigKofte}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  {this.game.price}₺
                  <button
                    disabled={!this.game.canDecreasePrice()}
                    style={{ marginLeft: "20px" }}
                    onClick={this.game.decreasePrice}
                  >
                    -
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={this.game.increasePrice}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>Demand Rate:</td>
                <td>%{this.game.demandRate}</td>
              </tr>
            </table>
          </div>
          <div style={{ marginTop: "16px" }}>
            <div>manufacture</div>
            <hr />
            <table>
              <tr>
                <td style={{ width: "150px" }}>Cookie / second:</td>
                <td>{this.game.lastManufacturedRate}</td>
              </tr>
              <tr>
                <td>Dough:</td>
                <td>
                  {this.game.material} gr
                  <button
                    style={{ marginLeft: "10px" }}
                    disabled={!this.game.canBuyMaterial()}
                    onClick={this.game.buyMaterial}
                  >
                    Buy ({this.game.materialCost}₺)
                  </button>
                </td>
              </tr>
              <tr>
                <td>Manager:</td>
                <td>
                  {this.game.hasAutoBuyer ? (
                    <React.Fragment>
                      {this.game.isAutoBuyerActive ? "Active" : "Stopped"}
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={
                          this.game.isAutoBuyerActive
                            ? this.game.stopAutoBuyer
                            : this.game.startAutoBuyer
                        }
                      >
                        {this.game.isAutoBuyerActive ? "Stope" : "Continue"}
                      </button>
                    </React.Fragment>
                  ) : (
                    <span>
                      Yok
                      {this.game.didUnlockAutoBuyer() && (
                        <button
                          style={{ marginLeft: "10px" }}
                          disabled={!this.game.canBuyAutoBuyer()}
                          onClick={this.game.buyAutoBuyer}
                        >
                          Buy ({this.game.autoBuyerCost}₺)
                        </button>
                      )}
                    </span>
                  )}
                </td>
              </tr>
            </table>
            <div style={{ marginTop: "16px" }}>
              <div>Workers:</div>
              <hr />
              <table>
                <tr>
                  <td>Errand:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.errandBoy}
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("ERRAND_BOY")}
                      onClick={() => this.game.buyAutoGenerator("ERRAND_BOY")}
                    >
                      Buy ({this.game.autoGenerators.errandBoyCost}₺)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Foreman:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.foreman}
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("FOREMAN")}
                      onClick={() => this.game.buyAutoGenerator("FOREMAN")}
                    >
                      Buy ({this.game.autoGenerators.foremanCost}₺)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Master:</td>
                  <td style={{ width: "50px", textAlign: "center" }}>
                    {this.game.autoGenerators.master}
                  </td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      disabled={!this.game.canBuyAutoGenerator("MASTER")}
                      onClick={() => this.game.buyAutoGenerator("MASTER")}
                    >
                      Buy ({this.game.autoGenerators.masterCost}₺)
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// 1 cig kofte
// 1 lira = talep tavan = 100%
// 40 lira = talep min = 0%

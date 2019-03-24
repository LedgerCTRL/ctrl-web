import React, {Component} from 'react';

const logo = "/img/logo.png"
const cardImgStyle = {
    width: "50%",
    paddingTop: "20px"
}

const impactStyle = {
    marginTop: "60px",
    marginBottom: "60px"
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cycleSelection: 0,
        }
        this.cycleLength = 2100; // ms
        this.selections = [
            'supply chain analytics',
            'non-fungible tokens',
            'ERC20',
            'file backups',
            'a database',
            'permanent history',
            'scalable apps',
            'quickly'
        ]
        this.tick = this.tick.bind(this);
        this.intervalHandle = setInterval(this.tick, this.cycleLength);
    }

    async tick() {
        await this.setState({
            cycleSelection: (this.state.cycleSelection + 1) % this.selections.length
        });
        //console.log(this.state.cycleSelection);
    }

    render() {
        return (
            <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>LedgerCTRL is...</h2>
                <p>
                The easiest way to build <code>{this.selections[this.state.cycleSelection]}</code> on blockchain.
                </p>
            </header>
            <div className="container">
                <div className="row" style={impactStyle}>
                <div className="col col-sm-3"></div>
                <div className="col col-sm-6" style={{textAlign:"left"}}>
                    <ul style={{alignContent: "left", alignItems: "left", paddingLeft: "0pt", marginTop: -69}}>
                        <h3>Why LedgerCTRL?</h3>
                        <li>Time is money</li>
                        <li>
                        Building blockchain apps has historically been difficult and cumbersome. 
                        <br />Almost as difficult as CSS.
                        </li>
                        <li>
                        Running servers and managing accounts is tedious and boring.
                        </li>
                        <li>
                        CTRL API does all of the boring stuff so you can build the app you want 
                        without worrying about benign technical details.
                        </li>
                    </ul>
                </div>
                </div>
                
                <h2 style={{ marginTop: "40px" }}>LedgerCTRL Saves Time</h2>
                <div className="row">
                <div className="col-sm">
                    <div className="card">
                    <div className="center">
                        <img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Smart Contracts On Deck</h5>
                        <p className="card-text" >We have a library of ready-to-go smart contracts that make use of the most widely ued tasks in blockchain.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                    <div className="center">
                        <img src="/img/browser.svg" style={cardImgStyle} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Refreshingly Familiar</h5>
                        < p className="card-text" >Interact with your data using CRUD: Create, Read, Update, and Delete. Simple enough for prototypes, strong enough for production.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                    <div className="center">
                        <img src="/img/email.svg" style={cardImgStyle} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Turnkey Account Management</h5>
                        <p className="card-text" >Managing users yourself sucks. Leverage native account management to hit the ground running.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-sm" style={impactStyle}>
                    <h3>Client Libraries</h3>
                    <h5>(coming soon...)</h5>
                </div>
                </div>
                <div className="row">
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Node.js
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Javascript
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Python
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    C#
                </div>
                </div>
                <div className="row">
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Ruby
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Go
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    Rust
                </div>
                <div className="col-sm card">
                    <div className="center"><img src="/img/admin.svg" style={cardImgStyle} className="card-img-top" alt="..." /></div>
                    REST
                </div>
                </div>
                <div className="row">
                <div className="col-sm" style={impactStyle}>
                    <h3>Get Started Now</h3>
                    <h5>(REST Only, for now...)</h5>
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6" style={{marginTop: -40}}>
                        <div className="panel-group bg-dark">
                        <div className="panel panel-default text-light align-items-left">
                            <code className="panel-body">git clone https://github.com/ledgerctrl/ctrl-api-python</code>
                        </div>
                        <div className="panel panel-default">
                            <code className="panel-body">cd ctrl-api-python</code>
                        </div>
                        <div className="panel panel-default">
                            <code className="panel-body">docker-compose build</code>
                        </div>
                        <div className="panel panel-default">
                            <code className="panel-body">docker-compose up</code>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <h3>
                    Check out our <a href="/tutorial">tutorial</a> for more details!
                </h3>
                <div className="row" style={{marginTop: 40}}>
                <div className="col-sm-3"></div>
                <div className = "col-sm-6" > We need help. If you 'd like to contribute, email us: <a href="mailto:brock@ledgerctrl.com">brock@ledgerctrl.com</a></div>
                </div>
            </div>
            </div>
        )
    }
}
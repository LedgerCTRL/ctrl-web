import React, {Component} from 'react';
import GetStarted from '../../components/getstarted';
import ApiKey from '../../components/apikey';

const logo = "/img/logo.png"
const cardImgStyle = {
    width: "50%",
    paddingTop: "20px"
}

const impactStyle = {
    marginTop: "60px",
    marginBottom: "60px"
}
let DEV = false;
var appId, key, url;

if (DEV){
    url = "http://localhost:8088";
}
else {
    url = "https://ctrl.vaasd.com:5377";
}

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "",
            appId: "",
            email: "test@email.com",
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(payload){
        this.setState(payload);
    }
    render() {
        return (
            <div className="container" style={{textAlign: "left"}}>
                <h1>How to blockchain with LedgerCTRL</h1>
                <strong>This page will give you the rundown on how to build a blockchain-enabled app with LedgerCTRL.</strong>

                <p>To run the LedgerCTRL API locally:</p>
                <GetStarted style={{marginTop: 60, marginBottom: 40}}/>

                <ApiKey url={url} onChangeProp={this.onChange}></ApiKey>

                <Steps>
                    <Step num={0}>
                        {[
                            "Get your API keys",
                            `curl \
                            -H 'Content-Type: application/json' \
                             -d '{\"email\": \"${this.state.email}\"}' \
                             ${url}/v2/apiUser`
                        ]}
                    </Step>
                    <Step num={0.1}>
                        {[
                            "Set your appId header",
                            `appId: ${this.state.appId}`,
                        ]}
                    </Step>
                    <Step num={0.2}>
                        {[
                            "Set your key header",
                            `key: ${this.state.key}`,
                        ]}
                    </Step>
                    <Step num={0.3}>
                        {[
                            "Set content-type header",
                            "Content-Type: application/json",
                        ]}
                    </Step>
                    <Step num={1}>
                        {[
                            "Create an item (sorry, formdata only right now...)",
                            `curl -X POST \
                            -H 'appId: ${this.state.appId}'\
                            -H 'key: ${this.state.key}'\
                            -H 'multipart/form-data' \
                            -F 'inventoryItem={"name": "test", "value": 42, "customer": {"id": 0}}' \
                            -F 'userIndex=1' \
                            -F 'upfile=@image.png' \
                            ${url}/v2/inventory`
                        ]}
                    </Step>
                    <Step num={2}>
                        {[
                            "Check out your data",
                            `curl -H \"appId: ${this.state.appId}\" \
                            -H\ "key: ${this.state.key}\" \
                             ${url}/v2/inventory/{itemHash}`
                        ]}
                    </Step>
                </Steps>
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-5">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pWf97qXRXzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="center">Our software is not yet complete... Please help us build it! 
                        Contact our lead developer, Brock: <a href="mailto:brock@ledgerctrl.com">brock@ledgerctrl.com</a></div>
                    </div>
                </div>
            </div>
        )
    }
}

class Steps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" style={{width: "6.9%"}}>Step</th>
                        <th scope="col">Details</th>
                        <th scope="col">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}

class Step extends Component {
    state = {};
    render() {
        return (
            <tr>
                <th scope="row">{this.props.num}</th>
                <td>
                    {this.props.children[0]}
                </td>
                <td>
                    <code>
                        {
                            this.props.children[1]
                        }
                    </code>
                </td>
            </tr>
        )
    }
}
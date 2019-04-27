import React, {Component} from 'react';
import GetStarted from '../../components/getstarted';

const logo = "/img/logo.png"
const cardImgStyle = {
    width: "50%",
    paddingTop: "20px"
}

const impactStyle = {
    marginTop: "60px",
    marginBottom: "60px"
}
let DEV = true;
var appId, key, url;

if (DEV){
    appId = "UxWAPM8PNjxUTkgbaxthC3m8qCGmF-_sAG-hbZU0YZE";
    key = "7m0HetRXpoR4V2mzzyOLD-sTGAju4EkAnJIN3fiPMXF37lA_hsez-S4SbnFKcu4d_-MnLwyLxtKS995jBJfjVA";
    url = "localhost:8088";
}
else {
    appId = "Gye3CErSpXtpejvtXJlsGg5YwR3MlVbK2SY09kZtHMc";
    key = "TMZ2V2YH7_GY5ttYAmXROt05EGSqMptAOpUKoIh4q0dV1je0FsgoBXxl9-Kc_bfhJpBGVqw2dArSwsv1vsE-Ig";
    url = "https://ctrl.vaasd.com:5377";
}

export default class Tutorial extends Component {
    render() {
        return (
            <div className="container" style={{textAlign: "left"}}>
                <h1>How to blockchain with LedgerCTRL</h1>
                <strong>This page will give you the rundown on how to build a blockchain-enabled app with LedgerCTRL.</strong>

                <p>To run the LedgerCTRL API locally:</p>
                <GetStarted style={{marginTop: 60, marginBottom: 40}}/>

                <Steps>
                    <Step num={0}>
                        {[
                            "Get your API keys",
                            `curl \
                            -H 'Content-Type: application/json' \
                             -d '{\"email\": \"test@email.com\"}' \
                             ${url}/v2/apiUser`
                        ]}
                    </Step>
                    <Step num={0.1}>
                        {[
                            "Set your appId header",
                            `appId: ${appId}`,
                        ]}
                    </Step>
                    <Step num={0.2}>
                        {[
                            "Set your key header",
                            `key: ${key}`,
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
                            -H 'appId: ${appId}' \
                            -H 'key: ${key}' \
                            -H 'multipart/form-data' \
                            -F 'inventoryItem={"name": "test", "value": 42, "customer": {"id": 0}}' \
                            -F 'userIndex=120' \
                            -F 'upfile=@image.png' \
                            ${url}/v2/inventory`
                        ]}
                    </Step>
                    <Step num={2}>
                        {[
                            "Check out your data",
                            `curl -H \"appId: ${appId}\" \
                            -H \"key: ${key}\" \
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
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
                            "POST /v2/apiUser {\"email\": \"test@email.com\"}"
                        ]}
                    </Step>
                    <Step num={0.1}>
                        {[
                            "Set your appId header",
                            "appId:bf8AtT_JByFM-f52uSrx7RTuQ6t88R1xMOq6ShWz1Zg",
                        ]}
                    </Step>
                    <Step num={0.2}>
                        {[
                            "Set your key header",
                            "key: VGivT5IYpQtnIOZnml38rmUBvX3IXZLPmYbqUGt7NQk0a6S3TkzMgP2o9KThlRNk_gHBdo9SJz2KKULqBbMG_A",
                        ]}
                    </Step>
                    <Step num={0.3}>
                        {[
                            "Set content type: JSON",
                            "Content - Type: application / json",
                        ]}
                    </Step>
                    <Step num={1}>
                        {[
                            "Deploy an Itembase contract",
                            "POST /v2/itembase"
                        ]}
                    </Step>
                    <Step num={2}>
                        {[
                            "Create an item",
                            "POST /v2/inventory"
                        ]}
                    </Step>
                    <Step num={3}>
                        {[
                            "Check out your data",
                            "GET /v2/inventory/QmWUxnWDKAKZrh6wUJ1JcAsxH2oLMJzSS8fjQrexydUcEb"
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
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

export default class Tutorial extends Component {
    render() {
        return (
            <div className="container" style={{textAlign: "left"}}>
                <h1>How to blockchain with LedgerCTRL</h1>
                <span>This page will give you the rundown on how to build a blockchain-enabled app with LedgerCTRL.</span>
                <Steps>
                    <Step num={1}>
                        {["do thing 1", 
                        "do-thing -1"]}
                    </Step>
                    <Step num={2}>
                        {["do thing 2", 
                        "do-thing -2"]}
                    </Step>
                    <Step num={3}>
                        {["do thing 3", 
                        "do-thing -3"]}
                    </Step>
                </Steps>
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
                        $ {this.props.children[1]}
                    </code>
                </td>
            </tr>
        )
    }
}
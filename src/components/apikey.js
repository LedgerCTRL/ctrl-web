import React, {
    Component
} from 'react';
import axios from 'axios';

export default class ApiKey extends Component{
    constructor(props) {
        super(props);
        this.state = {
            key: "your_key_here",
            appId: "your_appId_here",
            url: props.url ? props.url : "https://ctrl.vaasd.com:5377",
            emailInput: "",
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            emailInput: e.target.value,
        });
    }
    async onClick(e) {
        let result = await axios.post(this.state.url + "/v2/apiUser", {
            "email": this.state.emailInput,
        });
        console.log(result);
        let _key = result.data.key;
        let _appId = result.data.appId;
        let payload = {
            key: _key,
            appId: _appId,
            email: this.state.emailInput,
        };
        this.setState(payload);
        this.props.onChangeProp(payload);
    }
    render() {
        return (
            <div>
                <label forHtml="email">Enter email to get an API key.</label><br />
                <input name="email" type="email" id="email" placeholder="email" onChange={this.onChange}></input>
                <button className="btn" onClick={this.onClick}>Request API key</button>
                <p>key: <code>{this.state.key}</code></p>
                <p>appId: <code>{this.state.appId}</code></p>
            </div>
        );
    }
}
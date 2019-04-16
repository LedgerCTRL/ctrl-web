import React, {Component} from 'react';

export default class GetStarted extends Component {
    render(){
        return(
            <div className="row" style={this.props.style}>
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
        );
    }
} 
import React, {Component} from 'react';

export default class Footer extends Component {
    state = {};

    render() {
        return (
            <footer class="page-footer font-small">
                LedgerCTRL is a subsidiary of VaaS Technologies, Inc.
                <div class="footer-copyright text-center py-3">© 2019 Copyright 
                    <a href="https://ledgerctrl.com/"> LedgerCTRL Company. </a>
                    <span>All rights reserved.</span>
                </div>
            </footer>
        )
    }
}
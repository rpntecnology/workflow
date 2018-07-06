/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiMain
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from "./logo";
import * as $ from "jquery";
//import TextField from '@material-ui/core/TextField';

import Config from '../config/config';

export interface IProps {
    main: any;
    key:any;
}

export interface IState {

}


class PageGhotiLogin extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    public render() {
        return (
            <div className="main">
                <div className="title">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '100px',
                        alignItems: 'center',
                    }}>
                        <img src={logo} alt="logo" style={{
                            width: '70px',
                            height: '50px',
                        }} />
                        <div style={{
                            flex: 1,
                            paddingLeft: '10px',
                            paddingTop: '20px',
                            display: 'inline',
                            fontSize: '20px',
                            color: 'darkblue',
                            fontWeight: 'bold',
                        }}>
                            Repair and Preservation Network, LLC
                    </div>
                    </div>
                </div>
                <div className="space">
                    <div style={{
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                    }}>
                        Welcome to Repair and Preservation Network Company!
                </div>
                </div>
                <div className="menu">
                    <div style={{
                        margin: '15px',
                    }}>
                        <button className="link" title="Sign In" onClick={this.changeStatus}><ins>Sign In</ins></button>
                    </div>
                    <div style={{
                        margin: '5px',
                    }}>
                        <button className="link" title="Sign Up" onClick={this.changeStatus}><ins>Sign Up</ins></button>
                    </div>
                </div>
                <div className="loginT">
                    <div style={{
                        textAlign: 'center',

                    }}>
                        <h1>Sign in</h1>

                        Username: <input id="UN" /><br /><br />
                        Password:  <input id="PW" type="password" /><br /><br />
                        <div style={{
                        }}>
                            <button onClick={this.login}>
                            </button></div>
                    </div>
                </div>
            </div>
        );
    }

    protected login() {
        var temp;
        $.ajax({
            url: 'http://67.205.144.64:8000/login',
            //url: 'http://localhost:8080/login',
            method: 'POST',
            datatype: "json",
            data: JSON.stringify({
                username: $('#UN').val(),
                password: $('#PW').val(),
            }),
            success: function (data) {
                temp=data;
                //this.IProps.key = data;
                console.log(temp);
            },
        });
        
    }

    protected changeStatus() {

    }


}

export default PageGhotiLogin;
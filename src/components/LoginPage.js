import React, { Component } from 'react'

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: null,
            displayName: "",
            id: "",
            email: "",
            country: "",
            accessToken: "",
            refreshToken: "",
            loginResponse: null,
        }
    }

    render() {
        const displayName = this.state.displayName;
        const id = this.state.id;
        const email = this.state.email;
        const country = this.state.country;
        const accessToken = this.state.accessToken;
        const refreshToken = this.state.refreshToken;

        return(
            <div className="loginPageContainer">
                <h1>Logged in as {displayName}</h1>
                <div className="media">
                    <div className="media-body">
                    <dl >
                        <dt>Display name</dt><dd>{displayName}</dd>
                        <dt>Id</dt><dd>{id}</dd>
                        <dt>Email</dt><dd>{email}</dd>
                        <dt>Country</dt><dd>{country}</dd>
                    </dl>
                    </div>
                </div>

                <h2>oAuth info</h2>
                <dl>
                    <dt>Access token</dt><dd>{accessToken}</dd>
                    <dt>Refresh token</dt><dd>{refreshToken}></dd>
                </dl>
            </div>
        )
    }

    loginScript() {
        function getHashParams() {
            const hashParams = {};
            const e = /([^&;=]+)=?([^&;]*)/g;
            const r = /([^&;=]+)=?([^&;]*)/g;
            q = window.location.hash.substring(1);
            while (e = r.exec(q)) {
                hashParams[e[1]] = decodeURIComponent[e[2]];
            }
            return hashParams;
        }

        // there's this stuff
        //
        // var userProfileSource = document.getElementById('user-profile-template').innerHTML,
        // userProfileTemplate = Handlebars.compile(userProfileSource),
        // userProfilePlaceholder = document.getElementById('user-profile');

        // var oauthSource = document.getElementById('oauth-template').innerHTML,
        // oauthTemplate = Handlebars.compile(oauthSource),
        // oauthPlaceholder = document.getElementById('oauth');

        const params = getHashParams();
        const accessToken = params.access_token;
        const refreshToken = params.refresh_token;
        const error = params.error;

        if (error) {
            alert('There was an error during authentication.');
        } else {
            if (accessToken) {
                this.setState({accessToken: accessToken})
                this.setState({refreshToken: refreshToken})
            }
            const myOptions = {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
            };
    
            fetch('https://api.spotify.com/v1/me', myOptions)
                .then(response => response.json())
                .then(json => {
                    this.setState({ loginResponse: json });
                })
        }
    }
}

export default LoginPage
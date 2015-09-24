import React from 'react';

class Login extends React.Component{

    render() {
        return(<div className="row">
                <h2>Login</h2>
                <div className="form-group">
                    <label className="col-sm-2 control-label">User Name:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Password:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="password" placeholder="Password"/>
                    </div>
                </div>
               
        </div>);
    }
}

export default Login;  
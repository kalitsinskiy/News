import React from 'react';
import {withRouter} from 'react-router-dom';

const LogIn = ({login, history}) => {
    let email, password, remembered;
    return (
        <div className='form_authorization'>
            <form className='text-center border border-dark p-lg-5 p-md-5 p-sm-5 p-3  '
                  onSubmit={e => {
                      e.preventDefault();
                      login({email: email.value, password: password.value}, remembered.checked)
                      // history.push("/")
                  }}>
                <p className="h4 mb-4">Log In</p>
                <p>Join our mailing list. We write rarely, but only the best content.</p>
                <fieldset className="account-info">

                    <input
                        ref={node => email = node}
                        className="form-control mb-4"
                        type='email'
                        placeholder='Email'
                        required
                    />

                    <input
                        ref={node => password = node}
                        className="form-control mb-4"
                        type='password'
                        placeholder='Password'
                        required
                    />

                </fieldset>
                <fieldset className="account-action">
                    <div className="custom-control custom-checkbox mb-4">
                        <input
                            className="custom-control-input"
                            id="defaultContactFormCopy"
                            defaultChecked={true}
                            ref={node => remembered = node}
                            type="checkbox"
                            name="remember"
                        />
                            <label className="custom-control-label" htmlFor="defaultContactFormCopy">Remember</label>
                    </div>
                    <input className="btn btn-dark btn-block" type='submit' value='Log In'/>
                </fieldset>
            </form>
        </div>
    )
};

export default withRouter(LogIn);

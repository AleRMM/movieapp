import React from 'react'

const Login = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">

                    <div className='pb-5'>
                        <h3 className="text-5xl font-bold ">Register</h3>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Email</span>
                            <input type="text" placeholder="info@site.com" className="input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <span>Password</span>
                            <input type="password" placeholder="password" className="input input-bordered" />
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login
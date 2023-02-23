import React from 'react'

const Login = () => {
    return (
<>
<div className="hero min-h-[93vh]" style={{ backgroundImage: `url("http://images6.fanpop.com/image/photos/43600000/Spirited-Away-Wallpaper-studio-ghibli-43673033-1920-1080.jpg")` }}>
<div className="hero-overlay bg-opacity-60" />

    <div className='flex flex-col justify-center'>

    <div className="flex flex-col bg-black bg-opacity-60 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">

        <h3 className='text-5xl font-bold pb-5'>Welcome!</h3>
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
            <a className="link link-info label-text-alt link-hover">Don´t you have an account yet?</a>
        </div>

        <div className="form-control mt-6">
            <button className="bg-blue-500 shadow-lg shadow-blue-500/30">Sign in</button>
        </div>
    </div>
</div>
</div>

</>
    )
}

export default Login
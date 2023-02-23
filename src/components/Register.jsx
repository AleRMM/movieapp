import React from 'react'

const Register = () => {
    return (
<>
<div className="hero min-h-[93vh]" style={{ backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/748/459/799/movie-spirited-away-wallpaper-e163c3fb9570ff49670be51ca8eb07a2.jpg")` }}>
<div className="hero-overlay bg-opacity-0" />

    <div className='flex flex-col justify-center'>

    <div className="flex flex-col bg-black bg-opacity-60 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">

        <h3 className='text-5xl font-bold pb-5'>Get started</h3>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Username</span>
            </label>
            <label className="input-group input-group-vertical">
                <span>Username</span>
                <input type="text" placeholder="Hello" className="input input-bordered" />
            </label>
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
                <input type="password" placeholder="Password (min 8 characters)" className="input input-bordered" />
            </label>
        </div>

        <div className="form-control mt-6">
            <button className="bg-blue-500 shadow-lg shadow-blue-500/30">Continue</button>
        </div>
    </div>
</div>
</div>

</>
    )
}

export default Register
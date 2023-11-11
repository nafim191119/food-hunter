import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";




const SignUp = () => {
    const {register,handleSubmit,formState: { errors },} = useForm();
    const {createUser} = useContext(Authcontext);

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };


    return (
        <div>
            <Helmet>
                <title>Food Hunter | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200 px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })}  name="name" placeholder="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true }, { required: true, minlength:6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="text-red-500">Password is required</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one upper, lower, number and special character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" value="sign up" type="submit"/>
                        </div>
                    </form>
                    <p className='text-center mb-4 font-bold'><small>Already have an account? <Link to='/login' className='text-primary'>Click here for Login.</Link> </small></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;
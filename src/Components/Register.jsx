import React, { use, useState } from "react";
import SplitText from "../SmallComp/SplitText";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { isPasswordValid } from "../utilities/passwordChecker";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingPage from "../Pages/LoadingPage";

const Register = () => {
    const { createUser, setUser, profileDataUpdate, googleSignIn, loading, setLoading } =
        use(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

    // handle form submit
    const handleCreateUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(
            formData.entries()
        );

        if (!isPasswordValid(password)) {
            return;
        }

        // console.log(rest);
        // create user
        createUser(email, password)
            .then((res) => {
                const user = res.user;
                // updated user data in global state

                // user data for update
                const userData = {
                    displayName: rest.name,
                    photoURL: rest.photo,
                };

                // update user profile data in firebase (name, photo)
                profileDataUpdate(userData)
                    .then(() => {
                        setUser((prev) => ({ ...prev, ...user }));
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });

                // save user to database
                fetch("https://flexlance.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, ...rest }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success("User created successfully");
                            navigate("/");
                        }
                    });
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    // google Signin
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;
                setUser(user);
                const userData = {
                    email: user.email,
                    name: user.displayName,
                    photo: user.photoURL,
                };

                // console.log(userData);

                // checking that user already exists in database
                fetch(`https://flexlance.vercel.app/users/${user.email}`)
                    .then((result) => {
                        // console.log(result);
                        // user data send in database
                        if (result.status == 404) {
                            fetch("https://flexlance.vercel.app/users", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(userData),
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    if (data.insertedId) {
                                        setLoading(false)
                                        toast.success(
                                            "User has been created successfully"
                                        );
                                    }
                                });
                        } else if (result.ok) {
                            setLoading(false);
                            toast.success("User logged in successfully");
                        } else {
                            toast.error("Server error while checking user.");
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="min-h-[calc(100vh-71px)] flex flex-col items-center justify-center bg-base-200">
                <div className="border-2 border-gray-300 rounded-2xl shadow-2xl">
                    <div className="md:w-3xl w-xs px-6 py-4 border-b-2 border-dashed border-gray-300 flex justify-center">
                        <form
                            onSubmit={handleCreateUser}
                            className="space-y-4 w-full">
                            <h1 className="text-2xl font-bold text-center">
                                <SplitText
                                    text="Register Now"
                                    className="text-2xl font-semibold text-center"
                                    delay={150}
                                    animationFrom={{
                                        opacity: 0,
                                        transform: "translate3d(0,50px,0)",
                                    }}
                                    animationTo={{
                                        opacity: 1,
                                        transform: "translate3d(0,0,0)",
                                    }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    onLetterAnimationComplete={
                                        handleAnimationComplete
                                    }
                                />
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="label">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="w-full py-2 px-4 border-2 border-gray-400 rounded-2xl focus:outline-none focus:border-double focus:border-[#123458]"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="w-full py-2 px-4 border-2 border-gray-400 rounded-2xl focus:outline-none focus:border-double focus:border-[#123458]"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">Photo URL</label>
                                    <input
                                        name="photo"
                                        type="text"
                                        className="w-full py-2 px-4 border-2 border-gray-400 rounded-2xl focus:outline-none focus:border-double focus:border-[#123458]"
                                        placeholder="Enter your photo URL"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label className="label">Password</label>
                                    <input
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        className="w-full py-2 px-4 border-2 border-gray-400 rounded-2xl focus:outline-none focus:border-double focus:border-[#123458]"
                                        placeholder="Password"
                                        required
                                    />
                                    <div
                                        className="absolute top-[68%] right-3 transform -translate-y-1/2 cursor-pointer text-gray-600"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }>
                                        {showPassword ? (
                                            <FaEyeSlash size={18} />
                                        ) : (
                                            <FaEye size={18} />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="btn btn-primary w-full mt-4">
                                    Register
                                </button>
                            </div>
                            <h1 className="text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link to="/auth/login" className="underline">
                                    Login
                                </Link>
                            </h1>
                        </form>
                    </div>
                    <div className="px-6 py-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn w-full bg-white text-black border-[#e5e5e5]">
                            <svg
                                aria-label="Google logo"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path
                                        fill="#34a853"
                                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path
                                        fill="#4285f4"
                                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path
                                        fill="#fbbc02"
                                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path
                                        fill="#ea4335"
                                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

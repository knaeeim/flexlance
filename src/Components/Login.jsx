import React, { use, useState } from "react";
import SplitText from "../SmallComp/SplitText";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const { googleSignIn, setUser, emailLogIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
    };

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

                console.log(userData);

                // checking that user already exists in database
                fetch(`http://localhost:3000/users/${user.email}`)
                    .then((result) => {
                        console.log(result);
                        // user data send in database
                        if (result.status == 404) {
                            fetch("http://localhost:3000/users", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(userData),
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    if (data.insertedId) {
                                        toast.success(
                                            "User created successfully"
                                        );
                                        navigate(location.state ? `${location.state}` : "/");
                                    }
                                });
                        } else if (result.ok) {
                            toast.success("User logged in successfully");
                        } else {
                            toast.error("Server error while checking user.");
                        }
                    })
                    .catch((error) => {
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handleEmailLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogIn(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                navigate(location.state ? `${location.state}` : "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-[calc(100vh-71px)] flex flex-col items-center justify-center bg-base-200">
            <div className="border-2 border-gray-300 rounded-2xl shadow-2xl">
                <div className="md:w-sm w-xs px-6 py-4 border-b-2 border-dashed border-gray-300 flex justify-center">
                    <form
                        onSubmit={handleEmailLogin}
                        className="space-y-4 w-full">
                        <h1 className="text-2xl font-bold text-center">
                            <SplitText
                                text="Login Now"
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

                        <div>
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="w-full py-2 px-4 border-2 border-gray-400 rounded-2xl focus:outline-none focus:border-double focus:border-[#123458]"
                                placeholder="Email"
                            />
                        </div>

                        <div className="relative">
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
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
                        <div className="flex justify-center items-center">
                            <button className="btn btn-primary w-full mt-4">
                                Login
                            </button>
                        </div>
                        <h1 className="text-sm text-gray-500">
                            Don't have account?{" "}
                            <Link to="/auth/register" className="underline">
                                Register
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
    );
};

export default Login;

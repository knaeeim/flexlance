import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-[90%] mx-auto py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-green-700 mb-4">
                    About Flexlance
                </h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Flexlance is your go-to platform for posting short-term tasks and hiring talented freelancers who can get them done fast, affordably, and efficiently.
                </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
                <div className=" shadow-md p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2 ">
                        🎯 Our Mission
                    </h2>
                    <p className="">
                        Our mission is to empower individuals and businesses by connecting them with skilled freelancers for flexible and on-demand task solutions. We believe in the power of remote collaboration and freelancing to drive progress.
                    </p>
                </div>

                <div className="shadow-md p-6 rounded-xl">
                    <h2 className="text-2xl font-semibold mb-2">
                        🌍 Our Vision
                    </h2>
                    <p className="">
                        We envision a future where every person can monetize their skills, and every task—no matter how small—can find its ideal doer, quickly and securely.
                    </p>
                </div>
            </div>

            {/* Who We Serve */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
                    Who We Serve
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-base-200 p-5 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">💼 Task Posters</h3>
                        <p className="">
                            Got a job you need done? Whether it's graphic design, bug fixing, writing, or virtual assistance—Flexlance lets you post tasks and connect with verified freelancers easily.
                        </p>
                    </div>
                    <div className="bg-base-200 p-5 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">🧑‍💻 Freelancers</h3>
                        <p className="">
                            Looking to earn flexibly using your skills? Join as a freelancer, browse tasks posted by real clients, and bid on projects that match your expertise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

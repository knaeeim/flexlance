import React from "react";
import CountUp from "react-countup";

const Counting = () => {
    return (
        <div data-aos="zoom-in-up" className="w-12/12 mx-auto rounded-2xl md:pb-20 mt-8 pb-8">
            <div className="text-center space-y-4 md:w-10/12 w-full mx-auto">
                <h1 className="text-3xl font-bold">
                    Empowering Freelancers & Clients Globally
                </h1>
                <p className="md:text-lg text-xs max-w-2xl mx-auto">
                    Connect with top freelancers, post tasks, and get work done quickly and securely.
                    Whether you're a developer, designer, marketer, or client — our platform is built to help you grow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <div className="pr-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={10000}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Registered Freelancers</h1>
                </div>

                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={115000}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Tasks Completed</h1>
                </div>

                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={2000}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Active Clients</h1>
                </div>

                <div className="pl-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={15}
                            duration={2.75}
                            separator=""
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Service Categories</h1>
                </div>
            </div>
        </div>
    );
};

export default Counting;
import React, { use } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {
    
    const { user } = use(AuthContext);

    return (
        <div data-aos="zoom-in-up" className="bg-base-300">
            <footer className="footer sm:footer-horizontal text-base-content py-10 md:px-0 px-5 max-w-[90%] mx-auto">
                <aside>
                    <img
                        src="https://i.ibb.co/DHGHcHRn/flexlance-logo.png"
                        className="w-14 h-14"></img>
                    <p>
                        Flexlance Technologies Ltd.
                        <br />
                        Providing reliable tech since 1992
                        <br />
                        Dhaka, Bangladesh-1216
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to="/" className="link link-hover">
                        Home
                    </Link>
                    <Link to="/addTask" className="link link-hover">
                        Add Task
                    </Link>
                    <Link to="/browseTasks" className="link link-hover">
                        Browse Task
                    </Link>
                    <Link to={`/myPostedTasks/${user?.email}`} className="link link-hover">
                        My Post Task
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a
                        href="https://www.facebook.com/k.naeeim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2">
                        <FaFacebook /> Facebook
                    </a>
                    <a
                        href="https://github.com/knaeeim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2">
                        <FaGithub />
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/khairulnaeeim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2">
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

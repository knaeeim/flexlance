import React from "react";
import GridMotion from "../SmallComp/GridMotion";

const ImageFeature = () => {
    const items = [
        "Digital Marketing",
        <div key="jsx-item-1" className="text-xl font-semibold text-blue-600">
            AI-Powered Strategies
        </div>,
        "https://i.ibb.co/KjZmXrJN/im-1.png",
        "https://i.ibb.co/h1Ht9ZPF/im-6.png",
        <div key="jsx-item-2" className="text-xl font-semibold text-green-600">
            Expert Consultation
        </div>,
        "https://i.ibb.co/wNw8b2xH/im-7.png",
        <div key="jsx-item-3" className="text-xl font-semibold text-purple-600">
            24/7 Customer Support
        </div>,
        "https://i.ibb.co/qY9mLQZk/im-2.png",
        "https://i.ibb.co/VppcddXN/im-3.png",
        <div key="jsx-item-4" className="text-xl font-semibold text-yellow-600">
            Trusted by 5K+ Clients
        </div>,
        "https://i.ibb.co/TDctcdvd/im-8.png",
        <div key="jsx-item-5" className="text-xl font-semibold text-indigo-600">
            Boost Your Online Presence
        </div>,
        "https://i.ibb.co/C5nTJsWn/im-4.png",
        "Mobile Development",
        <div key="jsx-item-6" className="text-xl font-semibold text-rose-600">
            Seamless UX/UI Design
        </div>,
        "https://i.ibb.co/KjZmXrJN/im-1.png",
        <div key="jsx-item-7" className="text-xl font-semibold text-cyan-600">
            Performance Optimization
        </div>,
        "https://i.ibb.co/VppcddXN/im-3.png",
        "https://i.ibb.co/wNw8b2xH/im-7.png",
        <div key="jsx-item-8" className="text-xl font-semibold text-lime-600">
            Conversion-Driven Funnels
        </div>,
        "https://i.ibb.co/C5nTJsWn/im-4.png",
        <div key="jsx-item-9" className="text-xl font-semibold text-teal-600">
            ROI-Focused Campaigns
        </div>,
        "https://i.ibb.co/xSNfvCfq/im-5.png",
        "https://i.ibb.co/h1Ht9ZPF/im-6.png",
        "Digital Marketing",
        <div key="jsx-item-10" className="text-xl font-semibold text-blue-600">
            AI-Powered Strategies
        </div>,
        "https://i.ibb.co/KjZmXrJN/im-1.png",
        "https://i.ibb.co/h1Ht9ZPF/im-6.png",
        <div key="jsx-item-11" className="text-xl font-semibold text-green-600">
            Expert Consultation
        </div>,
        "https://i.ibb.co/wNw8b2xH/im-7.png",
        <div
            key="jsx-item-12"
            className="text-xl font-semibold text-purple-600">
            24/7 Customer Support
        </div>,
        "https://i.ibb.co/qY9mLQZk/im-2.png",
        "https://i.ibb.co/VppcddXN/im-3.png",
    ];

    return (
        <div className="my-20">
            <GridMotion items={items}></GridMotion>
        </div>
    );
};

export default ImageFeature;

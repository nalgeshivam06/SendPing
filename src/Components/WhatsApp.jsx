"use client";
import { useState } from "react";
import Main from './Main';
import Team from "./Team";
import Privacy from "./Privacy";
import Pricing from "./Pricing";

const nav = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "Team",
    },
    {
        id: 3,
        title: "Privacy",
    },
    {
        id: 4,
        title: "Buy Premium",
    },
];

export default function WhatsApp() {
    const [showNav, setShowNav] = useState(0);

    return (
        <div className="h-screen overflow-y-auto">
            <div className="w-full mx-auto text-white font-medium px-4">
                <div className="flex">
                    {nav.map((navi, i) => {
                        return (
                            <button
                                key={i}
                                className={`w-72 text-center py-3 bg-[#138c81] ${
                                    showNav === i ? "bg-[#065f55]" : ""
                                }`}
                                onClick={() => setShowNav(i)}
                            >
                                {navi.title}
                            </button>
                        );
                    })}
                </div>
                {showNav === 0 && (
                    <div className="bg-white">
                        <Main />
                    </div>
                )}
                {showNav === 1 && (
                    <div className="bg-white">
                        <Team />
                    </div>
                )}
                {showNav === 2 && (
                    <div className="bg-white">
                        <Privacy />
                    </div>
                )}
                {showNav === 3 && (
                    <div className="bg-white">
                        <Pricing />
                    </div>
                )}
            </div>
        </div>
    );
}

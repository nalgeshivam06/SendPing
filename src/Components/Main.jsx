import {
    AiOutlineFileExcel,
    AiOutlineDownload,
    AiFillStar,
} from "react-icons/ai";

const messageSettings = [
    { id: 1, title: "Send Attachments" },
    { id: 2, title: "Add Option to Unsubscribe" },
    { id: 3, title: "Send Unpersonalized Message" },
    { id: 4, title: "Time Gap" },
];

export default function Main() {
    return (
        <div>
            <div className="flex justify-between mx-5 py-2 font-medium">
                <button className="flex gap-2 bg-[#026b50] py-2 px-2 rounded">
                    <AiOutlineFileExcel className="mt-1" />
                    Upload Excel
                </button>
                <button className="flex gap-2 bg-[#026b50] py-2 px-2 rounded">
                    <AiOutlineDownload className="mt-1" />
                    Excel Template
                </button>
                <button className="flex gap-2 bg-[#026b50] py-2 px-2 rounded">
                    <AiOutlineDownload className="mt-1" />
                    Download Group
                </button>
            </div>
            <div className="flex gap-1 ml-5 mr-4">
                <input
                    type="number"
                    name="countrycode"
                    id="countrycode"
                    placeholder="Add Numbers With country code Eg 919333333333 seperated by commas + Enter"
                    className="w-[95%] border border-gray-400 rounded-md px-2 py-2 text-sm text-black"
                />
                <button className="bg-[#7f8180] rounded px-2">Clear</button>
            </div>
            <h2 className="font-semibold text-black flex justify-center mb-6">
                0 contact(s) found
            </h2>
            <div className="mx-5 flex justify-between text-sm text-black mb-4">
                <h2 className="font-semibold">Message Settings</h2>
                <h2>
                    Facing issues? check our{" "}
                    <a
                        href="/"
                        className="underline text-blue-600 font-normal"
                    >
                        Tutorial
                    </a>
                </h2>
            </div>
            <div className="mx-5 mb-3">
                {messageSettings.map((setting, i) => {
                    return (
                        <div key={i} className="flex gap-5 text-black">
                            <input
                                type="checkbox"
                                name="settings"
                                id={"settings" + i}
                            />
                            <label htmlFor="settings">{setting.title}</label>
                        </div>
                    );
                })}
            </div>
            <hr className="mx-5 bg-gray-400" />
            <div className="mx-5 my-3">
                <h2 className="font-semibold text-black text-sm">
                    Type Your Message here
                </h2>
            </div>
            <div className="ml-4 w-full">
                <textarea
                    name="message"
                    id="message"
                    cols="100"
                    rows="5"
                    placeholder="Quora Answer"
                    className="bg-[#dcf8c7] border-2 border-[#217460] rounded px-2 py-2"
                ></textarea>
            </div>
            <div className="items-right justify-end w-full ml-88">
                <button className="flex gap-2 bg-[#026b50] py-2 px-2 rounded text-sm font-medium">
                    <AiFillStar className="mt-1" />
                    Add Template
                </button>
            </div>
        </div>
    );
}

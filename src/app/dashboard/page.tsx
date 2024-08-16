"use client";
import { useState } from "react";
import Irys from "@irys/sdk/build/cjs/common/irys";

// const getIrys = async () => {
//   // Initialize the Irys SDK
//   return new Irys({
//     network: "mainnet",
//     token: "your_token_here",
//     key: "your_key_here",
//   });
// };

const Page = () => {
  const [data, setData] = useState("");
  const [file, setFile] = useState<any>();
  const [transaction, setTransaction] = useState("");

  async function upload() {
    if (!data) return;

    try {
    //   const irys = await getIrys();

      const blob = new Blob([data], { type: "text/plain" });
      const tags = [{ name: "application-id", value: "MyTextUpload" }];

    //   const receipt = await irys.uploadFile(blob, { tags });
    //   console.log(`Text uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    //   setTransaction(`https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading text", e);
    }
  }

  async function uploadFile() {
    if (!file) return;

    try {
    //   const irys = await getIrys();
      const tags = [{ name: "application-id", value: "MyFileUpload" }];

    //   const receipt = await irys.uploadFile(file, { tags });
    //   console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    //   setTransaction(`https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading file", e);
    }
  }

  function handleFileChange(e: any) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="">
        <div className="flex flex-col items-center justify-between bg-slate-500 py-8">
          <input
            placeholder="Create a post"
            onChange={(e) => setData(e.target.value)}
            className="text-black px-2 py-1 border-blue"
          />
          <button onClick={upload} className="text-black bg-white mt-2 px-12">
            Upload text
          </button>
        </div>

        <div className="flex flex-col items-center justify-between mt-10 bg-slate-500 py-8">
          <input type="file" onChange={handleFileChange} />
          <button
            onClick={uploadFile}
            className="text-black bg-white mt-2 px-12"
          >
            Upload file
          </button>
        </div>

        {transaction && (
          <a target="_blank" rel="noopener noreferrer" href={transaction}>
            View Uploaded Data
          </a>
        )}
      </div>
    </div>
  );
};

export default Page;

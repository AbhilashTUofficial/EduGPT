import React, { useState } from "react";

export default function Test() {
  const [testName, setTestName] = useState("");
  const [testDesc, setTestDesc] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [className, setClassName] = useState("");
  const [questionType, setQuestionType] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File:", file);
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any logic with the state values here (e.g., submit data to a server)
    console.log("Test Name:", testName);
    console.log("Test Description:", testDesc);
    console.log("Selected File:", selectedFile);
    console.log("Class Name:", className);
    console.log("Question Type:", questionType);

    // Reset the form or perform any other necessary actions
    setTestName("");
    setTestDesc("");
    setSelectedFile(null);
    setClassName("");
    setQuestionType("");
  };

  return (
    <div>
      <p className="font-bold text-5xl text-teal-500 text-center mt-10">
        Test Details
      </p>
      <form
        className="border border-teal-500 mt-14 w-[22rem] ml-4 h-[42rem]"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-2xl text-teal-500 ml-5 mt-3">Test Name</h3>
        <input
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          className="relative h-[3rem] w-[20rem] p-6 ml-2 mt-5 bg-gray-200 te flex flex-col justify-center items-center rounded-xl"
          placeholder="name"
        />
        <h3 className="font-bold text-2xl text-teal-500 ml-5 mt-3">Test Desc</h3>
        <input
          type="text"
          value={testDesc}
          onChange={(e) => setTestDesc(e.target.value)}
          className="relative h-[3rem] w-[20rem] p-6 ml-2 mt-5 bg-gray-200 te flex flex-col justify-center items-center rounded-xl"
          placeholder="desc"
        />
        <h3 className="font-bold text-2xl text-teal-500 ml-5">Upload PDF</h3>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="relative h-[3rem] w-[20rem] p-3 ml-2 mt-5 bg-gray-200 te flex flex-col justify-center  rounded-xl"
            id="pdfFileInput"
          />
        </div>
        <h3 className="font-bold text-2xl text-teal-500 mt-4 ml-5">Class Name</h3>
        <select
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="relative h-[3rem] w-[20rem] p-6 ml-2 mt-5 bg-gray-200 te flex flex-col justify-center items-center rounded-xl"
        >
          <option></option>
          <option>IT A</option>
          <option>IT B</option>
          <option>CS A</option>
          <option>CS B</option>
          <option>EC A</option>
        </select>

        <h3 className="font-bold text-2xl text-teal-500 mt-4 ml-5">Type Of Question</h3>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          className="relative h-[3rem] w-[20rem] p-6 ml-2 mt-5 bg-gray-200 te flex flex-col justify-center items-center rounded-xl"
        >
          <option></option>
          <option>Yes/No</option>
          <option>MCQ</option>
          <option>Short Answer</option>
          <option>Essay</option>
          <option>Computational</option>
        </select>
        <button
          type="submit"
          className="relative h-[3rem] w-[14rem] p-6 ml-11 mt-[2.5rem] flex flex-col justify-center items-center rounded-xl bg-teal-500  text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

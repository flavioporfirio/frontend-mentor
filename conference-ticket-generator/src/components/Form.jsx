import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import iconUpload from "../assets/icon-upload.svg";

import { useForm } from "react-hook-form";
import { CircleAlert } from "lucide-react";

const FILE_LIMIT = 500000;

export default function Form({ onHandleTicketGenerated, onHandleFormData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(undefined);
  const [selectedFile, setSelectedFile] = useState(undefined);

  const onDrop = useCallback((acceptedFiles) => {
    if (isValidFile(acceptedFiles[0])) {
      setSelectedFile(acceptedFiles[0]);
      const file = new FileReader();

      file.onload = function () {
        setPreview(file.result);
      };

      file.readAsDataURL(acceptedFiles[0]);
    } else {
      setSelectedFile(acceptedFiles[0]);
      // alert("Invalid file type or size");
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const isValidFile = (file) => {
    return file && file.type.startsWith("image/") && file.size <= FILE_LIMIT;
  };

  const onSubmit = function () {
    onHandleFormData({ watchFormData, selectedFile });
    onHandleTicketGenerated();
  };

  const watchFormData = watch();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 my-8"
    >
      <div className="flex flex-col gap-4 my-4">
        <p className="text-slate-300">Upload Avatar</p>

        <div
          className="relative flex flex-col items-center gap-3 h-50 rounded-lg border-dashed border-2 border-slate-500 justify-center bg-slate-700"
          {...getRootProps()}
        >
          {preview ? (
            <p className="w-50 h-50 flex items-center justify-center">
              <img src={preview} alt="uploaded preview" />
            </p>
          ) : (
            <label htmlFor="image" className="flex flex-col items-center gap-2">
              <img
                src={iconUpload}
                alt="upload icon"
                className="bg-slate-700 border
            multiple
            border-slate-500 rounded-2xl w-16 h-16 p-2"
              />
              <span className="text-2xl text-slate-300 font-script">
                Drag and drop or click to upload
              </span>
            </label>
          )}

          <input
            name="image"
            type="file"
            id="image"
            accept="image/jpg, image/png"
            className="w-full h-full opacity-0 absolute"
            {...getInputProps()}
          />
        </div>

        <div className="flex items-center gap-2">
          <p
            className={`flex gap-2 text-base ${
              selectedFile && !isValidFile(selectedFile)
                ? "text-orange-700"
                : "text-slate-300"
            }`}
          >
            <CircleAlert />
            {selectedFile && !isValidFile(selectedFile)
              ? "File too large. Please upload a photo under 500KB."
              : "Upload your photo (JPG or PNG, max size: 500KB)."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="name">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base "
          {...register("name", { required: "Enter your name." })}
        />
        {errors.name && (
          <div className="flex gap-2 text-orange-700 text-base">
            <CircleAlert />
            <p>{errors.name.message}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          type="email"
          {...register(
            "email",
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            },
            { required: "Enter a valid email address." }
          )}
          className="z-10 w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base placeholder-slate-300"
          placeholder="example@email.com"
        />
        {errors.email && (
          <div className="flex gap-2 text-orange-700 text-base">
            <CircleAlert />
            <p>{errors.email.message}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-slate-300 font-script  text-xl" htmlFor="github">
          Github Username
        </label>
        <input
          name="githubUsername"
          type="text"
          {...register("githubUsername", {
            required: "Enter your github username.",
          })}
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 text-slate-300 font-script text-base placeholder-slate-300"
          placeholder="@yourusername"
        />
        {errors.githubUsername && (
          <div className="flex gap-2 text-orange-700 text-base">
            <CircleAlert />
            <p>{errors.githubUsername.message}</p>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full text-center font-script text-2xl font-extrabold bg-orange-400 text-black p-4 rounded-lg cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
}

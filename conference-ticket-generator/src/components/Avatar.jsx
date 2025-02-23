import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import iconInfo from "../assets/icon-info.svg";
import iconUpload from "../assets/icon-upload.svg";
import { CircleAlert } from "lucide-react";

export default function Avatar() {
  const [preview, setPreview] = useState(undefined);

  const onDrop = useCallback((acceptedFiles) => {
    if (isValidFile(acceptedFiles[0])) {
      const file = new FileReader();

      file.onload = function () {
        setPreview(file.result);
      };

      file.readAsDataURL(acceptedFiles[0]);
    } else {
      acceptedFiles[0] = undefined;

      alert("Invalid file type or size");
    }
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const FILE_LIMIT = 500000;

  const isValidFile = (file) => {
    return file && file.type.startsWith("image/") && file.size <= FILE_LIMIT;
  };

  return (
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
          type="file"
          id="image"
          name="image"
          accept="image/jpg, image/png"
          className="w-full h-full opacity-0 absolute"
          {...getInputProps()}
        />
      </div>

      <div className="flex items-center gap-2">
        <img src={iconInfo} alt="info icon" className="w-6 h-6" />

        <p className={"text-slate-300"}>
          <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        </p>
      </div>
    </div>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
export default function Uploadfile() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="mt-44 w-screen ">
      <div className="flex justify-center bg-slate-800 w-fit mx-auto rounded-xl h-80">
        <div>
          <h1 className="text-4xl underline text-center">
            Upload Para of book{" "}
          </h1>
          <div className="flex justify-center">
            <img src="/book.png" alt="" className="h-1/2 " />
          </div>

          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            className="w-[36rem]"
          >
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Alert } from "./ui/alert";
import { CircleCheckBig, TriangleAlert } from "lucide-react";

interface AllertErrorProps {
  title: string;
  description?: string;
}

export const AllertError = ({ title, description }: AllertErrorProps) => {
  return (
    <div role="alert">
      <div className="flex w-full gap-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-2 rounded-lg">
        <div className="flex items-center justify-center rounded-lg bg-red-200 w-12 h-8">
          <TriangleAlert strokeWidth={1.5} />
        </div>
        <div className="flex flex-col">
          <span className="block sm:inline pl-2">
            <strong className="font-bold">{title}</strong>
          </span>
          <span className="text-sm block sm:inline pl-2">{description}</span>
        </div>
      </div>
    </div>
  );
};
import React from "react";

type PageWrapperProps = {
  background?: string;
  container?: "normal" | "full";
  padding?: "normal" | "none";
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  background = newFunction(),
  container = "normal",
  padding = "normal",
  children,
}) => {
  const sectionClass =
    container === "full"
      ? "w-full"
      : "w-full lg:w-[90%] xl:w-[75%] 2xl:max-w-[90rem]";

  const paddingClass =
    padding === "none" ? "p-0" : "py-12 md:py-16 xl:py-24 px-4 md:px-6 lg:px-8";

  return (
    <main
      className={`relative w-full ${background} flex flex-col items-center ${paddingClass} z-10 overflow-x-clip`}
    >
      <div
        className={` ${sectionClass} flex flex-col items-center justify-center`}
      >
        {children}
      </div>
    </main>
  );
};

export default PageWrapper;

function newFunction(): string | undefined {
  return "bg-[#0D0E10]";
}

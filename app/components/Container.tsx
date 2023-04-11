"use client";

interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return (
    <div
      className="
        px-4
        xl:px-20
        md:px-10
        sm:px-2 
        max-w-[2520px]
        mx-auto
      "
    >
      {children}
    </div>
  );
};

export default Container;

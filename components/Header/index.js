import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="mt-10 flex items-center justify-between p-2 laptop:p-0">
        <h1
          onClick={() => router.push("/")}
          className="font-medium p-2 laptop:p-0 link"
        >
          {name}
        </h1>
        <div className="grid grid-cols-4">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          {showBlog && (
            <Button onClick={() => router.push("/blog")}>Blog</Button>
          )}
          {showResume && (
            <Button
              onClick={() => router.push("/resume")}
              classes="first:ml-1"
            >
              Resume
            </Button>
          )}
          <Button
            onClick={() => window.open("mailto:andreas.oberdammer+social@gmail.com")}
          >
            Contact
          </Button>
        </div>
      </div>  
    </>
  );
};

export default Header;

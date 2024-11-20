import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

export default function Navbar({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) {
  const flexBetween = "flex items-center justify-end";
  const pages = [
    { id: SelectedPage.Home, label: "Home" },
    { id: SelectedPage.Benefits, label: "Benefits" },
    { id: SelectedPage.OurClasses, label: "Our Classes" },
    { id: SelectedPage.ContactUs, label: "Contact Us" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-slate-700";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 left-0 z-30 py-6 w-full bg-white transition-all`}
      >
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          <div className={`${flexBetween} gap-16 w-full`}>
            <h2 className="font-bold text-2xl">Logo</h2>
            <div className={`${flexBetween} w-full`}>
              <div className={`hidden md:flex items-center text-sm gap-8`}>
                {pages.map(({ id, label }) => (
                  <Link
                    key={id}
                    page={id}
                    setSelectedPage={setSelectedPage}
                    selectedPage={selectedPage}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <IoMdClose className="h-6 w-6" />
                  ) : (
                    <IoMdMenu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            {isMenuOpen && (
              <div
                className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40 transition-transform duration-300 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                {pages.map(({ id, label }) => (
                  <div
                    key={id}
                    className="text-center py-3 hover:bg-gray-200 transition-colors duration-200 border-b border-gray-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      page={id}
                      setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

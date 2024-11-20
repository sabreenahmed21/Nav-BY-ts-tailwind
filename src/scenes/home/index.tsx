import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  useEffect(() => {
    setSelectedPage(SelectedPage.Home);
  }, [setSelectedPage]);

  return (
    <section id="home" className="h-screen p-8 pt-20 ">
      <div className="flex items-center justify-around">
        Home Section
        <button className="bg-primary-300 p-2 rounded-md">
          <ActionButton setSelectedPage={setSelectedPage}>
            Contact Us
          </ActionButton>
        </button>
      </div>
    </section>
  );
}

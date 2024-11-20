import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <a
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </a>
  );
}

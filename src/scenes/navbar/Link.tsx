import { SelectedPage } from "@/shared/types";

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children: string;
};

export default function Link({
  page,
  selectedPage,
  setSelectedPage,
  children,
}: Props) {
  return (
    <a
      href={`#${page}`}
      className={`${selectedPage === page ? "text-primary-500" : ""} hover:text-primary-300`}
      onClick={() => setSelectedPage(page)}
    >
      {children}
    </a>
  );
}

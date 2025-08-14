import { Metadata } from "next";
import WebPage from "./content";

export const metadata: Metadata = {
  title: "Web Application Development",
};

const Page = () => {
  return (
    <div>
      <WebPage />
    </div>
  );
};

export default Page;

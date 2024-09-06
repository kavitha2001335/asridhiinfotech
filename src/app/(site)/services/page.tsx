import Breadcrumb from "@/components/Common/Breadcrumb";
import ServicesComponent from "@/components/Services"; // Renamed here
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Page",
  description: "This is Services page description",
};

const Services = () => {
  return (
    <>
      <Breadcrumb pageName="Services Page" />
      <ServicesComponent /> {/* Updated to match the renamed import */}
    </>
  );
};

export default Services;

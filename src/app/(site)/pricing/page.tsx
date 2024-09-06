import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services Page" ,
  description: "This is Services page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services Page" />
      <Services />
      <Faq />
    </>
  );
};

export default PricingPage;

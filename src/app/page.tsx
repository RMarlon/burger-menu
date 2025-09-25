import { Head } from "@/components/Head";
import { MenuMobile } from "@/components/MenuMobile";

const Page = () =>{
  return(
    <div className="container mx-auto">
      <MenuMobile />
      <Head />
    </div>
  );
}

export default Page;
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <main className=" bg-black-100  space-y-20 flex justify-center items-center max-md:items-center max-md:justify-center  relative overflow-hidden ">
      <div className="md:ml-12 md:mr-24" >
        <FloatingNav navItems={[
          { name: 'home', link: '/', icon: <FaHome /> }
        ]} />
        < Hero />
        <Grid />
      </div>
    </main>
  );
}

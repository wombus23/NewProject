import { DefaultLayout } from "@/layouts";
import QanoonBotLogo from "@/assets/qanoon-bot-light-subtext.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-r from-[#113550] to-[#BCDAE1]">
        <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row lg:justify-between gap-[40px] items-center min-h-[calc(100vh-72px)] w-full">
          <img
            src={QanoonBotLogo}
            alt="Qanoon Bot"
            className="w-full max-w-[394px]"
          />
          <div className="auth-box flex flex-col w-full max-w-screen-sm gap-4 items-center justify-center bg-[#113550]/50 rounded-xl p-4 py-10 h-full border border-accent border-dashed">
            <h1 className="text-[48px] font-bold uppercase text-white">
              Let's Go
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant={"dark"}
                asChild
                size={"xl"}
                className="text-[20px] rounded-xl"
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button variant={"dark"} asChild size={"xl"} className="text-[20px] rounded-xl">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;

import { DefaultLayout } from "@/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { Link } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error: any) {
      console.error(error);
    } finally {
      // setLoading(false)
    }
  };
  return (
    <DefaultLayout>
      <div className="bg-[#BCDAE1]">
        <div className="container mx-auto px-4 flex flex-col items-center min-h-[calc(100vh-72px)]">
          <h1 className="text-[48px] m-4">Create an Account</h1>
          <form
            onSubmit={_onSubmit}
            className="flex flex-col gap-4 w-full max-w-[320px]"
          >
            <Input required disabled={loading} type="text" placeholder="Email..." />
            <Input required
              disabled={loading}
              type="password"
              placeholder="Password..."
            />
            <Button variant={"dark"} type="submit" className="uppercase">
              {loading ? <Loader className="w-[18px] h-[18px]" /> : "Create Account"}
            </Button>
            <p className="text-center">
              Already have an account? <Link className="text-main py-1 px-2 rounded-full hover:bg-blue-800/10" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Signup;

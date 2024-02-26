import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LandingPage = () => {
  return (
    <div>
      <h1>Hello from Landing page(Open)</h1>
      <div>
        <Link href='/sign-in'>
            <Button>Sign in</Button>
        </Link>
        <Link href='/sign-up'>
            <Button>Sign up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

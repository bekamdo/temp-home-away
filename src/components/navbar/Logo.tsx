import Link from "next/link";
import { Button } from "../ui/button";

import { LucideTent } from "lucide-react";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
      <LucideTent className="w-6 h-6"/>
      </Link>
    </Button>
  )
}

export default Logo
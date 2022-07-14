import { useRouter } from "next/router";
import Link from "next/link";
const Id = (rops) => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default Id;

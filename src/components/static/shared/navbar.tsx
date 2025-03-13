import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" href="/">
              <Image src="/logo.png" alt="Logo" height={32} width={32} />
              <p className="text-gray-500 ml-2">AI Interview Simulator</p>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link href={"/login"}>
              login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

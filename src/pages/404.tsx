import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <Link href="/home" className="mt-4 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;

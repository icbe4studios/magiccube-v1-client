import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-center px-6 py-10">
      
      <div className="mt-10">
        <p className="text-black dark:text-white text-xl mb-2">404</p>
        <p className="text-black dark:text-white text-lg">page not found</p>
      </div>

      <div className="flex flex-col items-center">
        <Link
          href="/"
          className="mt-10 dark:bg-white dark:hover:bg-white/80 bg-black hover:bg-black/80 text-white dark:text-black px-10 py-3 rounded-full text-lg transition uppercase"
        >
          click here
        </Link>
      </div>
    </div>
  );
}
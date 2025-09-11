export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
        <p className="text-lg">Welcome to the homepage!</p>
        <button className="mt-6 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
           Button
        </button>
      </div>
    </main>
  );
}

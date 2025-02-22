
import { BlogList } from "@/components/blog-list";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/theme-toggle";

export default  function Home() {
  return (
    <div className="min-h-screen bg-paper dark:bg-dark-paper transition-colors duration-300 ease-in-out">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <BlogList />
      </main>
    </div>
  );
}

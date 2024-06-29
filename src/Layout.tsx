import Sidebar from "./components/Sidebar/Index";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar></Sidebar>
      <main
        className="mt-3 px-8 w-full max-h-screen flex flex-col"
        style={{ maxWidth: "calc(100% - var(--sidebar-size))" }}
      >
        {children}
      </main>
    </div>
  );
}

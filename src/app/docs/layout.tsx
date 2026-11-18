import { DocsSidebar } from "@/components/DocsSidebar";
import { getDocsNav } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const sections = getDocsNav();

  return (
    <div className="container-page py-12">
      <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
          <DocsSidebar sections={sections} />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}

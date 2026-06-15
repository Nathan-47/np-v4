interface ProjectSidebarProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export function ProjectSidebar({ sections }: ProjectSidebarProps) {
  return (
    <aside className="top-20 h-fit w-64">
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-gray-400">
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

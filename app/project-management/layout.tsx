export default function ProjectManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="w-full">
            {children}
        </section>
    );
}

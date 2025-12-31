export default function VolunteerLayout({
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

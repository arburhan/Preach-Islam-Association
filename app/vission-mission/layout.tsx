export default function VissionMissionLayout({
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

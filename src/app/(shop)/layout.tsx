import { Navbar } from "@/components";

export default function ShopLayout({children}: {children: React.ReactNode}) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
import Navbar from "../navbar";
import Footer from "../footer";
import MenuCard from "../menucard";
import { menuItems } from "../menuitems";

export default function DrinksPage() {
    const drinksItems = menuItems.filter((item) => item.category === "Drinks");

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-primary mb-4">Drinks</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
                    {drinksItems.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
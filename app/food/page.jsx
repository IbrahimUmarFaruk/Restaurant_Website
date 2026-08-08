import Navbar from "../navbar";
import Footer from "../footer";
import MenuCard from "../menucard";
import { menuItems } from "../menuitems";

export default function FoodPage() {
    const foodItems = menuItems.filter((item) => item.category === "Food");

    return (
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2x1 font-bold text-primary mb-4">Food</h1>
            {foodItems.map((item) => (
                <MenuCard key={item.id} item={item} />
            ))}
        </div>
      <Footer />
      </div>
    );
}``
import { UtensilsCrossed, CupSoda, IceCreamCone } from "lucide-react";

export default function categoryboxes() {
    const categories = [
        { name: "Food", icon: UtensilsCrossed, href: "/food" },
        { name: "Drinks", icon: CupSoda, href: "/drinks"},
        { name: "Desserts", icon: IceCreamCone, href: "/desserts"}
    ];
    return (
        <div className="grid grid-cols-3 gap-4 p-6 max-w-4xl mx-auto">
            {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                    <a 
                    key={cat.name}
                    href={cat.href}
                    className="border-2 border-primary rounded-lg p-6 flex flex-col items-center gap-2 hover:bg-primary hover:text-white transition">

                    <Icon className="w-8 h-8 text-primary group-hover: text-white"/>
                    <span className="font-semibold">{cat.name}</span>    
                    </a>
                )
            })}
        </div>
    )
}
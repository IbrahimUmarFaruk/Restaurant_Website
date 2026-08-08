"use client";

import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useRouter} from "next/navigation";
import {menuItems } from "./menuitems";
import { getCurrentMealTime } from "./getmealtime";

export default function Navbar() {
    const router = useRouter();

    function handleOrderNow() {
        const currentMeal = getCurrentMealTime();

        const matchingItems = menuItems.filter((item) => item.mealTime.includes(currentMeal)
    );

    const pool = matchingItems.length > 0 ? matchingItems : menuItems;

    const randomItem = pool[Math.floor(Math.random() * pool.length)];
    router.push(`/item/${randomItem.id}`)

    }
    return (
        <header className="bg-primary px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-primary"/>
                </div>
                <div className="font-bold text-xl text-white">
                    EDC <span className="text-secondary">Kitchen</span>
                </div>
            </div>

            <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/food">Food</Link>
                <Link href="/drinks">Drinks</Link>
                <Link href="/desserts">Desserts</Link>
            </nav>

        
            <button  
            onClick={handleOrderNow}
            className="bg-secondary text-primary font-semibold text-sm px-4 py-2 rounded-full">
                Order Now
            </button>
        </header>
    )
}
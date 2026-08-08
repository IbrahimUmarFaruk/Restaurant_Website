import Link from "next/link";

export default function MenuCard({ item }) {
    return (
        <Link href={`/item/${item.id}`}>
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white cursor-pointer h-full flex flex-col mb-4">
            <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover flex-shrink-0"/>
            <div className="p-3 flex flex-col flex-1">
               <div className="font-semibold text-sm text-gray-500">{item.name}</div>
               <div className="text-xs text-gray-500 mt-1 line-clamp-2 flex-1">{item.description}</div>
               <div className="text-primary font-bold text-base mt-2"> ₦{item.price.toLocaleString()}</div>
            </div>
       
        </div>
        </Link>
    );
}
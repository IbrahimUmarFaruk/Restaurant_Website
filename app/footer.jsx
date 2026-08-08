import { MapPin, Phone, Clock } from "lucide-react"

export default function footer() {
    return(
        <footer className="bg-dark px-6 py-8 text-center text-white">
            <div className="font-bold text-lg mb-3">
                EDC <span className="text-secondary">Kitchen</span>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4"/>
                    EDC, Nassarawa State University, Keffi
                </div>
                <div className="flex items-center justify-center gap-1">
                    <Phone className="w-4 h-4"/>
                    +234 9159772021
                </div>
                <div className="flex items-center justify-center gap-1">
                    <Clock className="w-4 h-4"/>
                    9AM - 9PM
                </div>
            </div>

        <div className="text-xs text-gray-500 mt-4">
            @ Group 9 - NSUK EDC Practical Project. 
            <p className="font-bold">Developed by Mizan-Tech</p>
        </div>
        </footer>
    )
}
import "@/app/[locale]/globals.css"
import Image from "next/image"

const Cards = ({ text }: { text: string }) => {
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='front'>
                    <Image src="./estadisticas.svg" alt="card-photo" fill className="p-12"/>
                </div>
                <div className='back'>
                    <h3>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards
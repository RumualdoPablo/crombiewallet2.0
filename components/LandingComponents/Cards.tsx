import "@/app/[locale]/globals.css"
import Image from "next/image"

const Cards = ({ text, image }: { text: string, image:string }) => {
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='front'>
                    <Image src={image} alt="card-photo" fill className="p-12"/>
                </div>
                <div className='back flex items-center'>
                    <h3 className="font-semibold">{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards
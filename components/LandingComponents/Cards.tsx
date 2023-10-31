import "@/app/[locale]/globals.css"

const Cards = ({ text }: { text: string }) => {
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='front'>
                    <h3>Card One</h3>
                </div>
                <div className='back'>
                    <h3>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default Cards
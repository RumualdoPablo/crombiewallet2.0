import Image from "next/image";

const Brands = () => {
    const containerStyle = {};

    return (
        <section className="my-12 w-9/12 mx-auto">
            <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-16">
                <Image src="/logos/google.png" alt="" width={150} height={150} className="mb-2" />
                <Image src="/logos/github.png" alt="" width={150} height={150} className="mb-2" />
                <Image src="/logos/crombie.svg" alt="" width={150} height={150} className="mb-2 w-64 my-3" />
                <Image src="/logos/tremor.png" alt="" width={150} height={150} className="mb-2" />
                <Image src="/logos/figma.png" alt="" width={150} height={150} className="mb-2" />
            </div>
        </section>
    );
};

export default Brands;

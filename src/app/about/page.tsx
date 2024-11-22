
export default function About() {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center items-center border-2 bg-black">
                    <img src="/JFN.jpeg" alt="Hero Image" width={500} height={500} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold">TLT Media</h1>
                    <p className="text-lg mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        malesuada, libero in tincidunt euismod, purus nisl fermentum purus,
                        nec consectetur nunc elit id nunc. Sed malesuada, libero in
                        tincidunt euismod, purus nisl fermentum purus, nec consectetur nunc
                        elit id nunc.
                    </p>
                </div>
            </div>
        </div>
    );
}
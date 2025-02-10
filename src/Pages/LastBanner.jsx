import Button from "../Common/Button"


const LastBanner = () => {
    return (
        <div className="bg-[#50344E] ">
            <div className="content flex justify-center items-center gap-4 py-8 flex-col">

                <h1 className="text-[#FECC2A] text-4xl font-bold">Your dream kitchen <span className="text-white">is just a click away</span> </h1>
                <p className="text-white">Book a free online consultation with our kitchen design expert right away.</p>
                <Button
                    btn="Start your design journey"
                />
            </div>

            <div className="py-8 p-4 pb-16 md:pb-8 text-center md:text-start gap-4 text-white bg-[#41303e] flex-col flex justify-center items-center">
                <p>

                    © 2025 BHUMIKAR.com All Rights Reserved.
                </p>

                ¹For full scope, please visit, www.BHUMIKAR.com/in/service | ²For kitchen, wardrobes and storage | ³In comparison with a branded player and for exact scope | ⁴Booking amount is 5% of the final quote or Rs.25000, whichever is higher
            </div>

        </div>

    )
}

export default LastBanner

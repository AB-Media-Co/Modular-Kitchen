
const Heading = ({ title, description, btn }) => {
    return (
        <div className='flex justify-between flex-col md:flex-row md:items-center'>
            <div className="text-start mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            <div>
                <button className="bg-[#EB595F] cursor-pointer text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors text-sm font-semibold">
                    {btn}
                </button>
            </div>
        </div>
    )
}

export default Heading

const KitchenQuoteForm = () => {
  return (
    <div className="relative mt-[5rem] md:mt-[4rem] h-[90vh]">
      <div className="absolute inset-0">
        <img
          src="https://passiveprime.com/Bhumikar/wp-content/uploads/2024/09/DALL%C2%B7E-2024-09-10-16.39.59-A-modern-and-contemporary-bedroom-design-featuring-a-comfortable-bed-with-a-stylish-headboard-bedside-tables-with-minimalist-lamps-elegant-curtains-.webp"
          alt="bhhumikar"
          className="w-full h-[90vh]  object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 h-[50vh] to-white/8"></div>
      </div>
      <div className="relative content px-4 pt-10 md:pt-[65px] sm:px-6 lg:px-8">
        <div className="max-w-[560px] ">
          <h1 className="text-4xl font-bold leading-[54px] text-white sm:text-5xl md:text-[45px]">
            <span className="block">Stunning modular kitchens made</span>
            <span className="block text-[#FECC2A]">affordable</span>
          </h1>
          <p className="mt-6 text-[18px] text-white font-medium leading-[28px]">
            Get your dream kitchen today with low-cost EMIs from ₹3,300*
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitchenQuoteForm;
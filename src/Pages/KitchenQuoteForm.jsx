const KitchenQuoteForm = () => {
  return (
    <div className="relative mt-[5rem] md:mt-[4rem] h-[90vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.livspace-cdn.com/w:1920/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/real-home-photos-1641987952-u6Aux/abhijit-1641987978-x9XQL/guest-bedroom-1641990942-bBsaJ/starting-prices-1661256564-Qhk2L/copy-of-web-1-at-2x-20-1661256663-GhqFy.jpg"
          alt="Kitchen"
          className="w-full h-[90vh] object-top object-cover"
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
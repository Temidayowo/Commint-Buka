const FoodCard = ({ image, name, price, description, popular }) => {
  return (
    <div className="group bg-white rounded-xl shadow-gray-200 hover:shadow-xl shadow-sm overflow-hidden w-full h-full flex flex-col">
      
      {/* Image with badge */}
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        {popular && (
          <span className="absolute top-5 right-5 bg-white text-[#9e1212] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Popular
          </span>
        )}
      </div>

      {/* Content - now a flex column that grows */}
      <div className="px-5 py-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2 gap-2">
          <h3 className="font-bold text-lg text-gray-900">{name}</h3>
          <span className="text-[#9e1212] font-bold text-lg whitespace-nowrap">₦{price}</span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Pushes itself to the bottom */}
        <button className="w-full border border-gray-300 rounded-full py-2.5 font-semibold text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer mt-auto">
          Add to Order
        </button>
      </div>

    </div>
  );
};

export default FoodCard;
const CartItemSkeleton: React.FC = () => {
  return (
    <div className="flex md:items-center justify-between flex-col md:flex-row my-4 border-b border-neutral-700 pb-4 animate-pulse">
      <div className="flex items-center">
        <div className="w-48 h-32 bg-gray-300 rounded-md"></div>

        <div className="mr-10">
          <div className="h-6 bg-gray-300 rounded w-32 my-3"></div>
          <div className="flex items-center">
            <div className="bg-gray-300 rounded w-8 h-8"></div>
            <div className="mx-3 h-6 bg-gray-300 rounded w-8"></div>
            <div className="bg-gray-300 rounded w-8 h-8"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded w-24 my-4"></div>
        </div>
      </div>
      <div className="bg-gray-300 text-white px-4 py-2 rounded w-20 my-2"></div>
    </div>
  );
};

export default CartItemSkeleton;

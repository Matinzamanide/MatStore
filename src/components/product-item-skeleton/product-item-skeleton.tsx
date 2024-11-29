const ProductItemSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-500 shadow-md p-4 text-center animate-pulse">
      <div className="aspect-video bg-gray-300 rounded-lg w-full"></div>

      <div className="mt-4 text-right">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
      </div>

      <div className="border border-gray-300 bg-gray-300 h-8 rounded mt-4 w-1/2 mx-auto"></div>
    </div>
  );
};

export default ProductItemSkeleton;

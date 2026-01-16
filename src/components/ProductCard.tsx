interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <h3 className="font-semibold text-lg mb-1 text-black">{title}</h3>
      <p className="text-black text-sm mb-2">{description}</p>
      <p className="font-semibold text-black">${price}</p>
    </div>
  );
}


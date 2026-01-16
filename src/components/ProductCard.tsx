import Link from "next/link";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  id?: string;
}

export default function ProductCard({ image, title, description, price, id }: ProductCardProps) {
  const productId = id || title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/product/${productId}`} className="group cursor-pointer block">
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
    </Link>
  );
}


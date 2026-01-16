interface CategoryCardProps {
  image: string;
  title: string;
}

export default function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>
      
      <div className="relative h-full flex flex-col justify-end p-8">
        <h2 className="text-white text-4xl font-bold mb-4">{title}</h2>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium w-fit hover:bg-gray-100 transition">
          See Details
        </button>
      </div>
    </div>
  );
}


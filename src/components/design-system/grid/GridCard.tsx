import Tag from '../tag/Tag';

export type GridCardType = {
  title: string;
  description: string;
  image?: string;
}

export default function GridCard({
  title,
  description,
  image,
}: GridCardType){
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-yellow bg-gradient-to-r from-indigo-50 to-yellow-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
          src={image ? image : "https://dummyimage.com/720x400" }
          alt="blog"
        />
        <div className="p-6">
          <Tag
            tagTitle="Travel"
            tagColor="yellow"
          />
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            <button className="bg-gradient-to-r from-cyan-400 to-yellow-400 hover:scale-105 drop-shadow-md  shadow-cla-yellow px-4 py-1 rounded-lg">Learn more</button>

          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react";

interface WorkItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  techStack: string;
  url?: string;
}

interface WorksProps {
  items: WorkItem[];
}

const Works: React.FC<WorksProps> = ({ items }) => {
  return (
    <div className="relative w-full py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <figure
            key={index}
            className="glass-icon-hover w-full cursor-none rounded-md overflow-hidden"
            onClick={() => item.url && window.open(item.url, "_blank")}
          >
            <div className="relative overflow-hidden group h-[235px] rounded-md">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt || `work-${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              <figcaption className="absolute bottom-0 left-0 w-full p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/100 to-transparent">
                <h3 className="text-lg uppercase">
                  <span className="text-sm font-mono text-[#dbdbdb]">
                    0{index + 1}.
                  </span>{" "}
                  <span className="text-[#dbdbdb] font-satoshi">
                    {item.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-300">{item.techStack}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Works;

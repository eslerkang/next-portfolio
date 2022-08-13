import { data } from "autoprefixer";
import Image from "next/image";

export default function ProjectItem({ project }) {
  const properties = project.properties;
  const title = properties.name.title[0].plain_text;
  const github = properties.github.url;
  const video = properties.video.url;
  const description = properties.description.rich_text[0].plain_text;
  const image = project.cover?.external?.url || project.cover?.file?.url || "";
  const tags = properties.tags.multi_select;
  const start = properties.period.date.start;
  const end = properties.period.date.end;

  const calculatedPeriod = () => {
    const startArray = start.split("-");
    const endArray = end.split("-");

    const startDate = new Date(startArray[0], startArray[1], startArray[2]);
    const endDate = new Date(endArray[0], endArray[1], endArray[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const diff = diffInMs / (1000 * 60 * 60 * 24);

    return diff;
  };

  return (
    <div className="project-card">
      <Image
        className=" rounded-t-xl"
        src={image}
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="cover"
        quality={100}
        alt="cover image"
      />
      <div className="p-4 flex flex-col space-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className=" text-xl">{description}</h3>
        <div className="flex flex-wrap items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200 dark:bg-sky-600"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github 바로가기
        </a>
        <a href={video} target="_blank" rel="noopener noreferrer">
          동영상 보기
        </a>
        <h4 className=" text-lg">
          {start} ~ {end} ({calculatedPeriod()}일)
        </h4>
      </div>
    </div>
  );
}

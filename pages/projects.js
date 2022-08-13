import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { NOTION_DATABASE_ID, NOTION_TOKEN_ID } from "../config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className=" flex flex-col items-center justify-center px-6 min-h-screen my-10">
        <h1 className=" text-4xl font-bold sm:text-6xl">
          총 프로젝트:
          <span className="pl-3 text-blue-400">{projects.results.length}</span>
          개
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 m-6 py-10">
          {projects.results.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN_ID}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "period",
          direction: "descending",
        },
      ],
    }),
  };

  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    options
  );
  const projects = await response.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}

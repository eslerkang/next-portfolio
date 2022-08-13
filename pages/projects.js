import Layout from "../components/layout";
import { NOTION_DATABASE_ID, NOTION_TOKEN_ID } from "../config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((project) => (
        <h1 key={project.id}>{project.properties.name.title[0].plain_text}</h1>
      ))}
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

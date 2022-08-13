import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Animation from "../components/home/animation";

export default function Home() {
  return (
    <Layout>
      <section className="text-gray-600 body-font flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Animation />
          <Hero />
        </div>
      </section>{" "}
    </Layout>
  );
}

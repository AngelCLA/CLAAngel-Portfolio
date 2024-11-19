import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <>
      {/* Sección 1 */}
      <section className="relative flex flex-col items-center justify-center gap-8 px-4 min-h-svh">
        <div className="container gap-12 items-center z-10 ">
          {/* Texto principal */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Designing and <br /> building software.
            </h1>
            <p className="mt-6 text-lg">
              Hi, I'm Angel, a web developer from north México. <br />
              I love building things that are fun, well-crafted, and solve problems.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button color="secondary">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>

        {/* SVG centrado en la parte inferior */}
        <a href="#seccion2">
          <svg
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
            width="32"
            height="32"
            viewBox="0 0 51 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0912 45.1165L5.16888 25.1945L5.16885 25.1945C4.12152 24.1474 2.42358 24.1474 1.37625 25.1947C0.852623 25.7182 0.590824 26.4054 0.590824 27.0909C0.590824 27.7765 0.852661 28.4638 1.37646 28.9874L23.1951 50.8053C23.1951 50.8053 23.1951 50.8053 23.1951 50.8053C23.6981 51.3084 24.3802 51.5909 25.0914 51.5909C25.8025 51.5909 26.4848 51.3085 26.9878 50.8053C26.9878 50.8053 26.9878 50.8053 26.9878 50.8053L48.8053 28.9872L25.0912 45.1165ZM25.0912 45.1165L45.0126 25.1947L45.0126 25.1947C46.0599 24.1474 47.7578 24.1474 48.8052 25.1945C49.8526 26.2418 49.8527 27.94 48.8053 28.9872L25.0912 45.1165Z"
              fill="currentColor"
            />
            <path
              d="M25.0912 21.2073L5.16888 1.28537L5.16885 1.28534C4.12152 0.23819 2.42358 0.23819 1.37625 1.28552C0.852623 1.809 0.590824 2.49626 0.590824 3.18176C0.590824 3.86731 0.852661 4.55459 1.37646 5.07821L23.1951 26.8961C23.1951 26.8961 23.1951 26.8961 23.1951 26.8962C23.6981 27.3993 24.3802 27.6817 25.0914 27.6817C25.8025 27.6817 26.4848 27.3993 26.9878 26.8962C26.9878 26.8961 26.9878 26.8961 26.9878 26.8961L48.8053 5.07803L25.0912 21.2073ZM25.0912 21.2073L45.0126 1.28552L45.0126 1.28552C46.0599 0.23819 47.7578 0.23819 48.8052 1.28534C49.8526 2.33265 49.8527 4.03078 48.8053 5.078L25.0912 21.2073Z"
              fill="currentColor"
            />
          </svg>
        </a>

      </section>

      {/* Sección 2 */}
      <section id="seccion2" className="flex flex-col items-center justify-center gap-8 px-4 min-h-svh">
        <div className="container gap-12 items-center z-10">
          {/* Título de la sección */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building with the Latest Tools.
            </h1>
            <p className="mt-6 text-lg">
              I focus on using modern technologies like React, TypeScript, and Next.js to create dynamic and scalable web applications.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

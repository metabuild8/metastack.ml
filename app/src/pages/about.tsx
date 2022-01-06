import Container from "@client/components/common/Container";

export default function About() {
  return (
    <Container title="About - Azat Hafizov">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-slate-600 dark:text-slate-400">
          <p>
            Hey, I'm Azat. I'm a developer, writer, and the creator of&nbsp;
            <a href="" target="_blank" rel="noopener noreferrer">
              Future Metacognition.
            </a>
          </p>
          <p>
            I write about systems thinking, Metaverse, Omniverse, AR/VR, tinyML,
            microcontrollers, digital fashion and everything meta* on my
            newsletter.
          </p>
        </div>
      </div>
    </Container>
  );
}

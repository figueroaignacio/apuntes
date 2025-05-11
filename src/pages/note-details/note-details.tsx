import { Markdown } from "@/components/markdown";
import { notes } from "@content";
import { useParams } from "react-router";

export function NoteDetailsPage() {
  const { "*": slug } = useParams();

  const note = notes.find((note) => note.slugAsParams === slug);

  if (!note) return <p>Nota no encontrada</p>;

  return (
    <section>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <Markdown code={note.body} />
    </section>
  );
}

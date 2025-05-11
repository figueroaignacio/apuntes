import { subjects } from "@/lib/constants";
import { Link } from "react-router";

export function HomePage() {
  return (
    <section>
      <h1>Mis apuntes</h1>
      <p>
        Este proyecto trata sobre recopilar los apuntes que voy tomando en mi
        camino en la facultad.
      </p>

      {subjects.map(({ term, subjects }) => (
        <div key={term}>
          <h2>{term}</h2>
          <ul>
            {subjects.map((subject) => (
              <li key={subject.href}>
                <Link to={subject.href}>{subject.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

import data from "@/src/lib/constants";

// first cell spans 2 columns; stretch the last cell over whatever is left so no row has a hole
const slots = data.skills.length + 1;
const lastSpan = [
  slots % 2 ? "sm:col-span-2" : "",
  ["", "lg:col-span-3", "lg:col-span-2"][slots % 3],
].join(" ");

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <h2 className="reveal text-4xl font-semibold tracking-tighter md:text-5xl">Skills</h2>

      <div className="reveal mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {data.skills.map((s, i) => (
          <div
            key={s.group}
            className={
              i === 0
                ? "bg-surface p-8 sm:col-span-2 md:p-10"
                : `bg-background p-8 md:p-10 ${i === data.skills.length - 1 ? lastSpan : ""}`
            }
          >
            <h3 className="text-sm text-muted">{s.group}</h3>
            <ul className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 font-medium tracking-tight ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

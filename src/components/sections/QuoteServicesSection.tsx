export function QuoteServicesSection() {
  return (
    <section className="bg-v-faded py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title (left aligned like Figma) */}
        <h2 className="text-xl md:text-2xl font-semibold text-v-dark mb-8">
          Richiedi un preventivo per i seguenti servizi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceQuoteCard
            title="Impianti di riscaldamento"
            pills={["Progettazione e installazione", "Manutenzione e assistenza"]}
          />
          <ServiceQuoteCard
            title="Impianti di condizionamento"
            pills={["Progettazione e installazione", "Manutenzione e assistenza"]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceQuoteCard({
  title,
  pills,
}: {
  title: string;
  pills: string[];
}) {
  return (
    <div
      className="bg-v-dark text-white rounded-[20px] overflow-hidden"
      style={{
        clipPath:
          "polygon(0 0, 82% 0, 100% 30%, 100% 100%, 18% 100%, 0 70%)",
      }}
    >
      <div className="px-10 pt-10 pb-[60px] flex flex-col gap-6 min-h-[248px]">
        <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>

        <div className="flex flex-col gap-3 max-w-[320px]">
          {pills.map((p) => (
            <button
              key={p}
              className="w-full rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15 transition"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

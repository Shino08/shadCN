import { useEffect, useState } from "react";
import { CardWithSkeleton } from "./components/CardWithSkeleton";
import { Layout } from "./components/Layout";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCards([
        {
          title: "Ventas",
          description: "Total ventas hoy: $2,300",
          image: "https://picsum.photos/300/150?1",
        },
        {
          title: "Usuarios",
          description: "Nuevos usuarios: 12",
          image: "https://picsum.photos/300/150?2",
        },
        {
          title: "Reportes",
          description: "Reportes generados: 5",
          image: "https://picsum.photos/300/150?3",
        },
        {
          title: "Soporte",
          description: "Tickets abiertos: 3",
          image: "https://picsum.photos/300/150?4",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <CardWithSkeleton key={idx} loading={loading} data={card} />
        ))}
      </div>
    </Layout>
  );
};

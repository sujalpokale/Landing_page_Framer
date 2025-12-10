import ProductXLanding from "@/components/Landing/ProductXLanding";
import { CMS } from "@/app/lib/cms";

export default function Page() {
  const { hero, features } = CMS;

  return (
    <main>
     
      <ProductXLanding />

      <section id="hero" className="py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">{hero.fields.headline}</h1>
        <p className="mt-4 text-gray-600">{hero.fields.subHeadline}</p>
        <img
          className="mx-auto mt-6 max-w-lg"
          src={hero.fields.heroImage}
          alt={hero.fields.altText}
        />
      </section>

     
      <section id="features" className="py-20 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.fields.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-xl shadow">
            <img src={item.icon} alt={item.altText} className="mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

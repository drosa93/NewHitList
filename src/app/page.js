"use client";
import HitListForm from "./components/hitListForm";
import HitListItem from "./components/hitListitem";

export default function Home() {
  return (
    <body>
      <section className="flex flex-col border-2 rounded-md border-black">
      <HitListForm />
      </section>
      <section>
      <div>
        <HitListItem />
      </div>
      </section>
  </body>
  );
}

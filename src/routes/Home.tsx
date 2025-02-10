import CoworkList from "../components/coworks/CoworkList";

export default function Home() {
  return (
    <>
      <section className="min-h-[95vh] flex justify-between bg-clr-secondary border-2 border-clr-black rounded-2xl">
        <div className="container mx-auto w-full flex justify-center items-center">
          <p className="w-4/5 text-7xl leading-relaxed font-headline font-bold text-center">
            Find your space to{" "}
            <span className="px-2 text-7xl bg-clr-primary font-headline font-bold text-clr-white shadow-lb">
              Work
            </span>
            ,{" "}
            <span className="px-2 text-7xl bg-clr-primary font-headline font-bold shadow-lb">
              Connect
            </span>{" "}
            locally and{" "}
            <span className="px-2 text-7xl bg-clr-primary font-headline font-bold shadow-lb">
              Succeed
            </span>{" "}
            anywhere !
          </p>
        </div>
      </section>
      <section className="my-10 container">
        <h1 className="text-6xl mb-6">
          Accessible coworking spaces around you
        </h1>
        <p className="max-w-3xl">
          Choose from a wide range of coworking spaces, all designed to suit
          your needs. Whether you are looking for a private office, a shared
          workspace or just a spot to plug in your laptop, we've got you
          covered.
        </p>
        <div className="py-10">
          <CoworkList limit={5} />
        </div>
      </section>
      <section className="my-10 bg-clr-accent border-2 border-clr-black rounded-2xl">
        <div className="my-10 container">
          <h1 className="text-6xl mb-6">Always be aware of events</h1>
          <p className="max-w-3xl">
            Stay up to date with the latest events happening in your favorite
            coworking spaces. Whether it's a conference, a workshop, or a social
            gathering, we've got you covered.
          </p>
          <div className="py-10">
            <CoworkList limit={5} />
          </div>
        </div>
      </section>
      <section className="my-10 container mx-auto">
        <h1 className="text-6xl mb-6">Feedbacks from our users</h1>
        <div className="py-10">
          <CoworkList limit={5} />
        </div>
      </section>
    </>
  );
}

import CoworkList from "../components/coworks/CoworkList";
import homeImage from "../assets/images/home-img.jpg";

export default function Home() {
  return (
    <>
      <section className="min-h-[95vh] flex justify-between bg-clr-primary border-b-2 border-clr-dark">
        <div className="w-full relative">
          <div className="h-full">
            <img src={homeImage} alt="home image" className="" />
          </div>
          <p className="absolute top-1/3 left-1/4 text-clr-light">
            Have a work environment anywhere
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
      <section className="my-10 bg-clr-light border-y-2 border-clr-dark">
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

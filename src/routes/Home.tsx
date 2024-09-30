import HomeImg from "../assets/images/home-img.jpg";
import useToast from "../contexts/toast/useToast";

const slogan: string[] = ["connect", "collaborate", "succeed"];

export default function Home() {
  const toast = useToast();

  return (
    <>
      <section className="h-[70vh] flex justify-between">
        <div className="w-2/4">
          {slogan.map((item, key) => (
            <div
              key={key}
              className={`${
                key === 0
                  ? "text-primary-base"
                  : key === 1
                  ? "text-secondary-base"
                  : "text-accent-base"
              }`}
            >
              {item.split("").map((letter, key) => (
                <span
                  key={key}
                  className="capitalize text-9xl font-headline font-extrabold drop-shadow-2lb"
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
          <div>
            <p className="text-3xl font-headline font-bold">
              Finding workspace has never been easier !
            </p>
          </div>
        </div>
        {/* TODO: rounded image*/}
        <div className="w-2/4">
          <img src={HomeImg} alt="home-image" className="rounded-xl" />
        </div>
      </section>
      <section>
        <button
          className="btn-primary"
          onClick={() => toast && toast.success("Success toast notification.")}
        >
          Success
        </button>
        <button
          className="btn-accent"
          onClick={() => toast && toast.error("Error toast notification")}
        >
          Error
        </button>
      </section>
    </>
  );
}

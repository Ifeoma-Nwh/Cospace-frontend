import HomeImg from "../assets/images/home-img.jpg";

const slogan: string[] = ["connect", "collaborate", "succeed"];

export default function Home() {
  return (
    <>
      <div className="h-[70vh] flex justify-between">
        <div className="w-2/5 mt-[70px]">
          {slogan.map((item, key) => (
            <div
              key={key}
              className={`mb-[90px] ${
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
                  className="capitalize text-[200px] font-headline font-extrabold drop-shadow-2lb"
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="w-3/5 border-2 border-white-base shadow-3rb">
          <img src={HomeImg} alt="Home image" />
        </div>
      </div>
    </>
  );
}

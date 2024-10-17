import useToast from "../contexts/toast/useToast";

export default function Home() {
  const toast = useToast();

  return (
    <>
      <section className="min-h-[70vh] flex justify-between bg-secondary-200">
        <div className="w-full flex justify-center items-center">
          <p className="w-4/5 text-7xl leading-relaxed font-headline font-bold text-center">
            Find your space to{" "}
            <span className="px-2 text-7xl bg-primary-200 font-headline font-bold shadow-lb">
              Work
            </span>
            ,{" "}
            <span className="px-2 text-7xl bg-accent-200 font-headline font-bold shadow-lb">
              Connect
            </span>{" "}
            locally and{" "}
            <span className="px-2 text-7xl bg-primary-200 font-headline font-bold shadow-lb">
              Succeed
            </span>{" "}
            anywhere !
          </p>
        </div>
        {/* TODO: rounded image*/}
        {/* <div className="w-2/4">
          <img src={HomeImg} alt="home-image" className="rounded-xl" />
        </div> */}
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

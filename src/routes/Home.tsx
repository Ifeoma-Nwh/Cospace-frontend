import useToast from "../contexts/toast/useToast";

export default function Home() {
  const toast = useToast();

  return (
    <>
      <section className="min-h-[95vh] flex justify-between bg-clr-secondary border-b-2 border-clr-black">
        <div className="container mx-auto w-full flex justify-center items-center">
          <p className="w-4/5 text-7xl leading-relaxed font-headline font-bold text-center">
            Find your space to{" "}
            <span className="px-2 text-7xl bg-clr-primary font-headline font-bold shadow-lb">
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
      <section className="pt-10">
        <button
          className="btn-primary"
          onClick={() => toast && toast.success("Success toast notification.")}
        >
          Success
        </button>
        <button
          className="btn-secondary"
          onClick={() => toast && toast.error("Error toast notification")}
        >
          Error
        </button>
      </section>
    </>
  );
}

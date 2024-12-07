

const HomePage = () => {
  return (
    <div>
      <section class="parallax relative">
        <div className="bg-white w-[40vw] h-[20rem] rounded-[70px] bg-opacity-50 absolute bottom-[10rem] left-10 flex flex-col items-center justify-center p-5">
          <h1 className="text-highlight text-[2em]">Miu Miu Spa</h1>
          <p className="text-highlight">
            Miumiu spa is a well-known and premium brand in spa field. The
            modern Asian-style architecture of Miumiu spa combined with the
            subtle decorative furniture brings a harmonious, and cozy as well as
            professional, and polite atmosphere. In a piece of quiet and
            melodious music, being served with a professional team, we always
            wanted to bring the best services to you, for you to relax, reduce
            your fatigue and stress after all the outside troubles of life. Let
            yourself be cherished and love yourself more!
          </p>
        </div>
      </section>
      <section class="content flex flex-col">
        <h2 className="text-[3rem] text-highlight">Relax</h2>
        <p className="text-highlight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores quos unde sapiente culpa placeat, amet fuga molestiae eaque odit numquam optio! Voluptatem ad reprehenderit ut aspernatur culpa adipisci enim?</p>
        <div className="v-[50vh]"></div>
      </section>
    </div>
  );
}

export default HomePage

export const Card = ({card}) => {

  return (

      <swiper-slide>
        <div className="project-img w-full h-full bg-cover bg-center relative cursor-pointer">
          <img className="img-card object-cover rounded-lg" src={`./src/Portfolio/assets/ImgProyects/${card.name}.png`} alt="" />
          <div className="card-container flex flex-col justify-between items-center h-auto w-full pt-4 pb-4 absolute left-0 text-center bg-slate-900/70 backdrop-blur-sm rounded-b-3xl">
            <h1 className="dark:text-slate-50 text-2xl md:text-3xl lg:text-4xl font-bold">{card.name}</h1>
            <p className="dark:text-slate-50 pb-2 text-lg">{card.description}</p>
            <footer className="flex justify-center gap-1 text-slate-50 dark:text-slate-900">
              { card.tecnologies.map( tec => (
                <div key={tec} className="bg-slate-800 dark:bg-slate-50 w-auto h-auto rounded-md p-1 shadow-lg">{tec}</div>
              ))}
              </footer>
          </div>
        </div>
      </swiper-slide>
  )
}

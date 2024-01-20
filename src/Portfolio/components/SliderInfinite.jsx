
export const SliderInfinite = () => {

  const numberTec = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

  let key = 1;
  
  return (
    <div className="slider w-full h-auto overflow-hidden">
      <div className="slide-track flex ">
      { 
        numberTec.map( n => (
          <div key={key++} className="slide">
            <img src={`./assets/Tec/${n}.png`} alt="" />
          </div>
        ))
      }
      </div>
    </div>
  )
}

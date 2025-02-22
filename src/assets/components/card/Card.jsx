import './card.css'


function Card(data) {

  
  return (
    <>
      <div className="container">
       <div className="products">
        <div className="bola">
            <img src={data.data.img} alt="kkk" />
            <button>Add To Cart</button>
            <p>{data.data.name}</p>
            <p className='p'>${data.data.price}</p>
        </div>
       </div>
      </div>
    </>
  )
}

export default Card; 
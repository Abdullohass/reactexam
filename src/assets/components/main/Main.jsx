import './main.css'
import Card from '../card/Card';
import data from "../../../../public/data";

function Main() {

  return (
    <>
      <div className="container">
       <div className="hero">
       <h2>Products</h2>
       <button>Move All To Bag</button>
       </div>
       <div className="products">
          {data.map(e=>{
            return <Card key={e.id} data={e}/>
          })}
       </div>
      </div>
    </>
  )
}

export default Main;  
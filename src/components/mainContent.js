import React from 'react'
import product_card from "../data/product_data";

const MainContent = () =>{ 
  const listItemns = product_card.map((item)=>
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt=""/>
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price"><span>{item.currency}</span> {item.price}</p>
        <div className="btn">Adicionar</div>
      </div>
    </div>
  );
  return (
    <div className="main_content">
        <h3>Os melhores cafés para os melhores momentos</h3>
      {listItemns}
    </div>

  )
}

export default MainContent;
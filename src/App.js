import React from "react";
import Header from "./components/Header"
import Content from "./components/Content"
import Image from "./components/Image"
import GoodsCard from "./components/GoodsCard";


function App() {
  return <div>
      <Header />
      <Content />
      <Image />
      <GoodsCard src="https://cdn.anywellmag.com/2021/05/depositphotos_11490585-stock-photo-bananas.jpg" number="25" name="Banana"/>
      <GoodsCard src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Tomato.png" number="40" name="Tomato"/>
      <GoodsCard src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg" number="123" name="Apple"/>
      <br />
      <GoodsCard src="https://st.depositphotos.com/1000350/1936/i/950/depositphotos_19364449-stock-photo-cucumber-and-slices-isolated-over.jpg" number="13" name="Cucumber"/>
      <GoodsCard src="https://s1.eda.ru/StaticContent/Photos/120214140918/130320124922/p_O.jpg" number="220" name="Rice"/>
      <GoodsCard src="https://o-prirode.ru/wp-content/uploads/2017/08/82f8256c9575f56ab66b6e37459c743c.webp" number="300" name="Mushrooms"/>
  </div>;
}

export default App;

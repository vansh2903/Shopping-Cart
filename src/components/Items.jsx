import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import Data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {Data.map((d)=>{
        return(
      <ItemCard key={d.id}
                id={d.id}
                name={d.name}
                 price={d.price}
                 img={d.img} />
        );
    })}
    </div>
  );
}

export default Items;

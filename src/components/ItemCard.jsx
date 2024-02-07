import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";
// import { useContext } from "react";
// import { itemContext } from "../itemContext";

function ItemCard({ price ,name, id}) {
  // const value = useContext(itemContext);

  //destructure settotal from value instaed of writing value.setTotal
  const {handleAdd,handleRemove} = useValue();

  // const handleAdd = () => {
   
  //   setTotal(total+price);
  //   setItem(item+1);
  // };

  // const handleRemove = () => {
  //   if(total<=0)
  //   return;
  //   setTotal(total-price);
  //   setItem(item-1);

  //   //setTotal((prevState)=>prevState-price);
    
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({price,name,id})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;

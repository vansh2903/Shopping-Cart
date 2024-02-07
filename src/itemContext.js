import {createContext,useState,useContext} from "react";
import CartModal from "../src/components/CartModal";

const itemContext = createContext();

function useValue(){
    const value = useContext(itemContext);
    return value;
}



function CustomItemContext({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart , setShowCart] = useState(false);
    const [cart,setCart] = useState([]);


     //prod holding the whole object
    const handleAdd = (prode) => {
      //findindex return -1 if item is not in the cart and we have to add it to the cart array
   const index = cart.findIndex((item)=> item.id === prode.id);

   if(index === -1){
    setCart([...cart,{...prode,qty:1}]) ;
    setTotal(total+prode.price);
    
        // setItem(item+1);
   }
   else{
    cart[index].qty++;
    setCart(cart);
    setTotal(total+cart[index].price);
    console.log(cart); 
   }

   setItem(item+1);

      };
   
      const handleRemove = (id) => {
        const index = cart.findIndex((item)=> item.id === id);
        if(index!=-1)
        {
          
          cart[index].qty--;
          setItem(item-1);
          setTotal(total-cart[index].price);
          if(cart[index].qty==0){
            //splice function is used to remove an element at a provided index by 1
            cart.splice(index,1);
          }
        }
        setCart(cart);
      
    
        //setTotal((prevState)=>prevState-price);
        
      };

      const handleReset=()=>{
        setTotal(0);
        setItem(0);
        setCart([]);
      }
     
      const handleShowCart=()=>{
        setShowCart(!showCart);

      }

    return(
        <itemContext.Provider value={{total,item,handleAdd,handleRemove,handleReset,handleShowCart,cart,total}
        }>
          {showCart&&<CartModal/>}
         {children}
        </itemContext.Provider>
    )
}

export {itemContext,useValue};
export default CustomItemContext ;
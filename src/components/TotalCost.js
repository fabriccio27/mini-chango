import React, {useContext} from "react";
import ChangoContext from "../context/chango-context";
import { currencyArgentina } from "../locales/arg";


const TotalCost =()=>{

    const {groceries} = useContext(ChangoContext);

    const getSubtotal=()=>{
    
        const total = groceries.reduce((total,item)=>{
          return total + item.price * item.value;
        },0);
    
        return total===0 ? "Estoy vacío :( " : total.toLocaleString("es-ar", currencyArgentina);
    };

    return(
        <span className="total-cost">
            {getSubtotal()}
        </span>
    );
};

export default TotalCost;
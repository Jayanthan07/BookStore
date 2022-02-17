import css from '../bookstore.module.css';

const Selection = ({ setCart, cart, setCount, totalCount})=>{
    const addCount=(a)=>{
        let count = { ...totalCount };
        count = { ...count, [a]: count[a] ? count[a] + 1 : 1 };
        setCount(count);
    }
const addBook=(a)=>{
    let arr = [...cart];
    let storeBoo = [];

    if(!arr.length){
        arr.push([a]);
        addCount(a);

    }else{
        for(let [index,res] of arr.entries()){
            let boo = res.some((book) => book == a);
            storeBoo.push(boo);
            if (!boo) {
                arr[index].push(a);
                storeBoo=[];
                addCount(a);
                break;
            }
        }
        if (storeBoo.length && storeBoo.every(res=>res == true)){
           arr.push([a]);
            addCount(a);
            storeBoo=[];
        }
    }
    console.log(arr);
    setCart(arr);
}

return(<>
    <div className={css.formControl} onClick={()=>addBook("Book 1")}>
        Book 1
    </div>
    <div className={css.formControl} onClick={() => addBook("Book 2") }>
        Book 2
    </div>
    <div className={css.formControl} onClick={() => addBook("Book 3") }>
        Book 3
    </div>
    <div className={css.formControl} onClick={() => addBook("Book 4") }>
        Book 4
    </div>
    <div className={css.formControl} onClick={() => addBook("Book 5") }>
        Book 5
    </div>
</>)

}

export default Selection;
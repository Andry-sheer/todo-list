
import Item from "../Item/Item";

const List = ( { items, ...restProps } ) => (
    <ul>
      {items.map(item => <Item item={item} key={item.id} {...restProps} /> )}
    </ul>
)



export default List;
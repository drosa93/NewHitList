import { useState, useEffect } from 'react';
    import { getItems } from '../appwrite/hitListContext';
    
    function HitListItem() {
      const [items, setItems] = useState([]);

      useEffect(() => {
        async function fetchData() {
          const data = await getItems();
          setItems(data);
        }
        fetchData();
      }, []);
      console.log(items);
      return (
        <ul>
          {items.map((item) => (
            <li className='border-2 p-2 m-2 border-black rounded-md font-serif text-lg' key={item.$id}>
                {item.companyName} | {item.role} | {item.positionType} | {item.location} | {item.source} | {/*item.dateAdded*/}
                <button className='btn btn-primary'>Coffee Chat?</button>
            </li>// Replace attributeName with the actual attribute you want to display
          ))}
        </ul>
      );
    }
    
    export default HitListItem;
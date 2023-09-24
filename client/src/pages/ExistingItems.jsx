import { useState, useEffect } from "react";
import axios from 'axios';

export default function ExistingItems() {
    const [items, setItems] = useState([]);
    const [pop, setPop] = useState([]);

    useEffect(() => {
        axios.get('/item').then(response => {
            setItems(response.data);
        });
    }, []);

    function showDetail(item) {
        setPop([item]);
        console.log(pop);
    }
    
    return(
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {items.length > 0 && items.map(item => (
                <div className="cursor-pointer" onClick={() => showDetail(item)}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {item.addedPhotos?.[0] && (
                            <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/'+item.addedPhotos?.[0]} alt=""/>
                        )}
                    </div>
                    <h2 className="font-bold">{item.myTitle}</h2>
                    <h3 className="text-sm">{item.myLocation}</h3>
                </div>
            ))}
        </div>
    );
}
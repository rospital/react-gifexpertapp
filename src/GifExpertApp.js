import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        //categories.push('Pepito'); Esto esta mal
        // setCategories([ ...categories, 'HunterXHunter']);
        // Al inicio: setCategories([ 'HunterXHunter', ...categories]);
        setCategories( cats => [ ...cats, 'HunterXHunter']);
    }
    */

  return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>


        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key= { category }
                        category={ category } 
                    />
                ))
            }
        </ol>
    </div>
  )
}

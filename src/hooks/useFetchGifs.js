import { useEffect, useState } from "react";
import {getGifs}     from '../helpers/getGifs';

export default function useFetchGifs(category) {

    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs(category)
        .then(imgs => {
            
            setstate({
                data: imgs,
                loading: false,
            });

        }).catch((err) => {
            
        });
    },[category]);



    return state;
}

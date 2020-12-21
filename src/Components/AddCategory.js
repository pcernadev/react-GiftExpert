import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
   
    const [inputval, setInputval] = useState('')
   

    const handleInputChange=(e)=>{
        //console.log(e.target.value);
        setInputval(e.target.value)
    }

    const haddleSubmit=(e)=>{
        e.preventDefault();

        if (inputval.trim().length>2) {
            setCategories(catgs=> [inputval,...catgs]);
            setInputval('');            
        }


    }

    return (
         <form onSubmit={haddleSubmit}>
            <input 
                    type='text' 
                    value={inputval }
                    onChange={handleInputChange}
            />  
         </form>  
    )
}


AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired,
}
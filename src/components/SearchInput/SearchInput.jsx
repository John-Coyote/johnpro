import { useId } from 'react';
import cls from './SearchInput.module.css';
import { SearchIcon } from '../icons';

function SearchInput({ value, onChange }) {

const inputId = useId();

    return (<div className={cls.inputContainer}>
        <label htmlFor={inputId}>
            {<SearchIcon className={cls.searchIcon}/>}
        </label>
        <input type="text" id={inputId} className={cls.input} placeholder= "search" value={value} onChange={onChange} />
    </div>);
}

export default SearchInput;
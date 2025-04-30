import { useState, useEffect, useRef } from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { API_URL } from '../../constans';
import cls from './HomePage.module.css';
import { use } from 'react';
import QuestionCardList from '../../components/QuestionCardList/QuestionCardList';
import Loader from '../../components/Loader/Loader';
import { delayFn } from '../../helpers/delayFn';
import { useFetch } from '../../hooks/useFetch';
import SearchInput from '../../components/SearchInput/SearchInput';




function HomePage() {

    const [question, setQuestion] = useState([]);
    const [searchValue, setsearchValue] = useState("");
    const [getQuestion, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${url}`);
        const question = await response.json();

        setQuestion(question);
        return question
    })

    useEffect(() => {
        getQuestion("react");
    }, []);

    const onSearchChangeHandler = (e) => {
        console.log(e.target.value)
        setsearchValue(e.target.value);
    }
    return (
        <>
            <div className={cls.controlsConteiner}>
               <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
            </div>

            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            <QuestionCardList cards={question} />
        </>
    );
}

export default HomePage;
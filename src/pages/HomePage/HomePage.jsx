import { useState, useEffect } from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { API_URL } from '../../constans';
import cls from './HomePage.module.css';
import { use } from 'react';
import QuestionCardList from '../../components/QuestionCardList/QuestionCardList';
import Loader from '../../components/Loader/Loader';
import { delayFn } from '../../helpers/delayFn';
import { useFetch } from '../../hooks/useFetch';




function HomePage() {

    const [question, setQuestion] = useState([])
    const [getQuestion, isLoading, error] = useFetch(async (url) => {
        const response = await fetch(`${API_URL}/${url}`);
        const question = await response.json();

        setQuestion(question);
        return question
    })

    // const _getQuestion = async () => {
    //     try {
    //         setIsLoading(true)
    //         await delayFn();
    //         const response = await fetch(`${API_URL}/react`);
    //         const question = await response.json();

    //         setQuestion(question)
    //         console.log("question", question)
    //     } catch (error) {
    //         console.error(error)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    useEffect(() => {
        getQuestion("react");
    }, [])
    return (
        <>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}

            <QuestionCardList cards={question} />
        </>
    );
}

export default HomePage;
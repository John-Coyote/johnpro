import { useState, useEffect } from 'react';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { API_URL } from '../../constans';
import cls from './HomePage.module.css';
import { use } from 'react';
import QuestionCardList from '../../components/QuestionCardList/QuestionCardList';




function HomePage() {

    const [question, setQuestion] = useState([])

    const getQuestion = async () => {
        try {
            const response = await fetch(`${API_URL}/react`);
            const question = await response.json();

            setQuestion(question)
            console.log("question", question)
        } catch (error) {
            console, error(error)
        }
    }
    useEffect(() => {
        getQuestion();
    }, [])
    return (
       <QuestionCardList cards={question} />
    );
}

export default HomePage;
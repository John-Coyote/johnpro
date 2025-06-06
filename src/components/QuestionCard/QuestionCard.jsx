import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import cls from './QuestionCard.module.css';



function QuestionCard({card}) {

    const navigate = useNavigate();
    
    return (<div className={cls.card}>
        <div className={cls.cardLabels}>
            <div>Level: {card.level}</div>
            <div> {card.completed ? "Completed" : "Not completed"} </div>
        </div>
        <h5 className={cls.cardTitle}>{card.question}</h5>
        <div className={cls.cardAnswers}>
            <span>Short answer: </span>
            <p className={cls.cardAnswer}>{card.answer}</p>
        </div>
        <Button onClick={() => navigate(`/question/${card.id}`)}>View</Button>
    </div>);
}

export default QuestionCard;
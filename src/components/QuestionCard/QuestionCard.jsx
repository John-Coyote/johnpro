import { Button } from '../Button/Button';
import cls from './QuestionCard.module.css';



function QuestionCard() {
    return (<div className={cls.card}>
        <div className={cls.cardLabels}>
            <div>Level 1</div>
            <div>Not Complited</div>
        </div>
        <h5 className={cls.cardTitle}>Some question</h5>
        <div className={cls.cardAnswers}>
            <span>Short answer: </span>
            <p className={cls.cardAnswer}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, modi.</p>
        </div>
        <Button onClick={() => {}}>View</Button>
    </div>);
}

export default QuestionCard;
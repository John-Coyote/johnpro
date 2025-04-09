import cls from './Button.module.css';
            

const isPrimaty = true;


export const Button = ({onClick,children}) => {
  
    return <button className={`${cls.btn} ${isPrimaty ? cls.primary : ""}`} onClick={onClick}>{children}</button>
}
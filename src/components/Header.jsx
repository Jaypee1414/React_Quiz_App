import Quiz from '../assets/Quiz.png'
export default function Header(){
    return(
        <div>
            <header>
                <img src={Quiz} alt="Quiz Logo" srcset="" /> 
                <h1>React Quiz</h1>
            </header>
        </div>
    )
}
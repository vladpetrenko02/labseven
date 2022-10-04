import React from "react"

class Content extends React.Component {
    render(){
        return (
            <main>
            <p className="test">місто Київ, 2002 рік, 14 серпня</p>
            <p className="test2">СШ №193 м.Києва, НТУУ "КПІ" ім. Сікорського</p>
            <ul>
                <li>Рибальство</li>
                <li>Комп'ютерні ігри</li>
                <li>Танці</li>
            </ul> 
            <ol>
                <li>Франшиза Гарі Поттер</li>
                <li>Відьмак</li>
                <li>Форест Гамп</li>
            </ol>
            <p>Ірпíнь — місто України в передмісті Києва. Розташоване на річці Ірпінь. Центр Ірпінської міської громади. Найбільше місто у Бучанському районі Київської області.</p>
        </main>
        );
    }
}

export default Content
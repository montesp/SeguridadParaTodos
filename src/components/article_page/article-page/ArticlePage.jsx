import { Quest } from "../cuestionary/Quest";
import './ArticlePage.css';

function ArticlePage({data}){
    return(
        <section className="article-page__container">
            <div className="title-article__container">
                <h3 className="title-article__title">{data.title}</h3>
                <img
                src={data.img}
                className="title-article__img"
                alt="img"
                />
            </div>
            <div>
                {data.body}
            </div>
            <div >
                <h4 className="cuestionario-title">Cuestionario</h4>
                <Quest questions = {data.questions}/>
            </div>
        </section>
    )
}

export { ArticlePage };
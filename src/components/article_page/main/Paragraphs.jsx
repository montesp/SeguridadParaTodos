import './Paragraphs.css';


function Paragraphs({
    title,
    text,
}) {
    return (
        <div className='paragraph-container'>
            <h4 className='paragraph__title'>
                {title}
            </h4>
            <p className='paragraph__text'>
                {text}
            </p>
        </div>
    )
}

export {Paragraphs};
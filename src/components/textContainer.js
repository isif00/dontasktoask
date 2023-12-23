import '../styles/textContainer.css';


const TextContainer = ({ content }) => (
    <div className="text-container">
        <div className="main-container ">
            <p>{content}</p>
        </div>
    </div>
);

export default TextContainer;
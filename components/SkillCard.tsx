const SkillCard = (props) => {
    const { title, content } = props;
    return (
        <div className="bg-gray-10 w-64 max-w-full shadow-lg rounded-md m-auto p-4">
            <h2 className="font-bold">{title}</h2>
            <p>{content}</p>
        </div>
    ) 
}

export default SkillCard;
interface HeaderProps {
    text: string;
}

const Header = (props: HeaderProps) => {
    const { text } = props;
    const words = text.split(' ');
    const lastWord = words.pop();

    return (
        <h1 className="flex justify-center font-bold text-3xl">
            {words.join(' ')}&nbsp;
            <span className="text-blue-500">{lastWord}</span>
        </h1>
    )
}

export default Header;
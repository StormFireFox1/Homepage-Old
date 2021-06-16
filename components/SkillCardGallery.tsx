import SkillCard from 'components/SkillCard';

interface Skill {
    title: string;
    content: string;
};

const skills: Skill[] = [
    {
        title: "Programming Languages",
        content: "I know a few. Their full extent can be found on my GitHub repo \"HelloWorld\".",
    },
    {
        title: "Machine Learning",
        content: "Can't wait to automate more aspects of my life with that.",
    },
    {
        title: "Some electrical engineering",
        content: "Turns out you need hardware to make the software work."
    },
    {
        title: "Intermediate computer algorithms",
        content: "3 years of Romanian high school ought to do that to you.",
    },
    {
        title: "Git",
        content: "I have been told I'm good at Git and its commit messages by exactly one other person.",
    },
    {
        title: "Life skills",
        content: "Yes, that's important, too. I actually enjoy the simple minutiae of life, like cooking!",
    },
];

const SkillCardGallery = () => (
    <div className="flex flex-row flex-wrap">
        {skills.map((skill, index) => (
            <SkillCard key={`skill-${index}`} title={skill.title} content={skill.content} />
        ))}
    </div>
);

export default SkillCardGallery;
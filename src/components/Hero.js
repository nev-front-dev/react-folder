import tags from '../mock-data/tags.json';

export const Hero = () => {
    const tagsJSX = tags.map((tag) => {
        return (
            <span key = { tag.id } className = 'tag'>{ tag.name }</span>
        );
    });

    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и триксы</h1>
                <h1>React</h1>
            </div>

            <div className = 'tags'>
                { tagsJSX }
            </div>
        </section>
    );
};

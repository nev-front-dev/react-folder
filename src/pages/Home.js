// Components
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';

// Icons
import { icons } from '../theme/icons/tag';

export const Home = () => {
    return (
        <section className = 'layout'>
            <Hero />
            <Nav />
            <section className = 'tip-list'>
                <article>
                    <header>
                        <icons.React /> <h1>Заголовок</h1>
                    </header>
                    <main>
                        <time>
                            <div>
                                <span> время</span>
                                <span> Автор: автор</span>
                            </div>
                        </time>
                        <h2>Заголовк</h2>
                        <p>Превью-текст</p>
                    </main>
                    <footer>
                        <a>&nbsp; Читать полностью &rarr;</a>
                    </footer>
                </article>
            </section>
        </section>
    );
};

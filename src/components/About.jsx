/* eslint-disable react/prop-types */

export default function About() {
    return (
        <div className="rounded bg-gray-700 text-white p-4 text-base flex flex-col space-y-2 leading-snug">
            <div className="flex flex-col space-y-2">
                <SubTitle>À propos de &quot;2d6 en ligne&quot;</SubTitle>
                <p><Strong>2d6 en ligne </Strong>est un outil open source développé pour le jeu de rôle <Strong>2d6 One-One Versus System.</Strong></p>
                <p>L&apos;outil permet de créer, modifier, sauvegarder et faire évoluer vos personnages pour le jeu.<br />
                Il est également prévu de pouvoir effectuer des jets de dés et de rejoindre des parties en ligne 
                où les jets seront partagés à tous les joueurs d&apos;un même salon.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <SubTitle>2d6 One-One Versus System</SubTitle>
                <p>Le jeu <Strong>2d6 One-One Versus System</Strong> est la propriété de ses auteurs et de <Strong>2d6 Collections</Strong>.</p>
                <p><Strong>2d6 en ligne </Strong>n&apos;est affilié d&apos;aucune sorte avec ces derniers.</p>
                <p>
                    Jouer nécessite une copie 
                    du <Link to="https://www.amazon.fr/2D6-One-one-Versus-system-Teddyboy/dp/B0BZF9QZCD">Livre de règles 2d6 One-One Versus System</Link>.
                </p>
            </div>
            <div className="flex flex-col space-y-2">
                <SubTitle>Contribuer</SubTitle>
                <p>
                    Vous pouvez rejoindre la communauté 2d6 et contribuer au projet sur 
                    le <Link to="https://discord.com/channels/900326350643146783/1133345064643477614">fil dédié</Link> au 
                    sein du <Link to="https://discord.gg/fczD8j2FSH">serveur discord communautaire 2d6</Link>.
                </p>
                <p>
                    Le <Link to="https://github.com/LucasPitzalis/2d6-FPI">code source du projet</Link>
                    , ainsi que les <Link to="https://github.com/LucasPitzalis/2d6-FPI/blob/main/changelog.md">notes de changement</Link> sont 
                    également disponibles sur github.
                </p>
            </div>
        </div>
    );
}

function Link(props) {
    return (
        <a href={props.to} className="font-bold underline hover:text-sky-400">{props.children}</a>
    );
}

function SubTitle(props) {
    return (
        <h2 className="text-xl font-bold pb-1 w-full border-b border-white/30 leading-snug">{props.children}</h2>
    );
}

function Strong(props) {
    return (
        <strong className="font-semibold italic">{props.children}</strong>
    );
}


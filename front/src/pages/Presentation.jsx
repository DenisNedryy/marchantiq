import  simpsons  from "../assets/pictures/photos/simpsons.png";

export function Presentation() {
    return (
        <div className="presentation">
            <div className="box">
                <h2>Presentation</h2>
                <img src={simpsons} />
                <p>Je m'appelle Jean-François Marchais et je suis passionné par l'antiquité. Depuis mon plus jeune âge, j’ai été fasciné par les objets anciens et les histoires qu’ils racontent. Pour moi, chaque pièce que je découvre, que ce soit un meuble, une œuvre d'art ou un simple ustensile, est un témoin d'une époque révolue, et cela m’inspire profondément.</p>
                <br/><p>Je passe beaucoup de temps à parcourir brocantes, marchés aux puces et ventes aux enchères à la recherche de trésors cachés. Chaque découverte me plonge dans le passé, et j'adore imaginer la vie des personnes qui ont utilisé ces objets. Au-delà de la collection, je considère ma passion comme une quête pour comprendre les civilisations qui ont façonné notre monde.</p>
                <br/><p>Je partage également mes connaissances avec d'autres passionnés et je suis impliqué dans des associations qui œuvrent pour la préservation du patrimoine. Mon objectif est d'éveiller la curiosité des jeunes générations pour l'histoire et l'artisanat, et de les sensibiliser à l'importance de préserver notre héritage culturel. Pour moi, être antiquaire est bien plus qu’un métier ; c’est une vocation qui relie le passé au présent et qui enrichit ma vie au quotidien. </p>
            </div>
        </div>
    );
}
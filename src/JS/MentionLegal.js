// MentionLegal
import '../CSS/Commun.css';
import '../CSS/MentionLegal.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MentionLegal() {
    return (
      <div>
        <div className='marginBottom margintop'>
            <div className='fontFamily mention'>
                <h1 className='colorTitle'>Responsable du site Web</h1>
                <p>Les responsables de la publication et du développement sont: Arthur Besnard et Laura Paillet.</p>
                <h1 className='colorTitle'>Hébergeur</h1>
                <p>
                    Le site Internet M2L est hébergé par la société Github.
                    Toute réclamation devra être adressée
                    aux responsables de publications.
                </p>
                <h1 className='colorTitle'>Autres Informations</h1>
                <br/>
                <h2 className='colorTitle'>Proprété intellectuelle</h2>
                <p>
                    L’ensemble des éléments composant le site M2L tels que les textes, images, photographies, dessins, logos, 
                    marques, bases de données, vidéos, logiciels etc, sont la propriété exclusive de M2L ou du ou des tiers à qui ils appartiennent.
                    L’utilisateur s’interdit d’y porter une atteinte quelconque.
                </p>
                <br/>
                <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, 
                    de ces différents éléments est strictement interdite sans l'accord exprès par écrit des responsables cités plus haut.
                    Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles 
                    L.335-2 et suivants du Code de la propriété intellectuelle.
                    Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                    En outre, les propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
                    M2L est une association à but non lucratif.
                </p>
                <br/>
                <h1 className='colorTitle'> Informatiques et libertés</h1>
                <p>Les données recueillies sur le site sont destinées à l’usage de M2L à des fins de gestion administrative et ne font l’objet d’aucune communication à des tiers.
                    Conformément à la loi informatique et libertés, l’utilisateur dispose d’un droit d’accès, de modification ou de suppression des 
                    données le concernant sur simple demande à l’adresse suivante: association-m2l@gmail.com.
                </p>
                <br/>
                <h1 className='colorTitle'>Cookies</h1>
                <p>Chez LessonSharing nous n'utilisons pas de cookies destinés à récolter des statistiques de vos visites ou de connaître vos préférences vestimentaires... Nous préférons les manger !
                    C'est pourquoi nous ne vous envoyons pas de cookie lors de votre navigation sur notre site.
                </p>
                <br/>
                <h1 className='colorTitle'>Responsabilité</h1>
                <p>Les informations contenues sur ce site sont aussi précises que possible, 
                    et le site est mis à jour à différentes périodes de l’année, 
                    mais peut toutefois contenir des inexactitudes ou des omissions.
                    M2L ne saurait garantir l’exactitude, la complétude et l’actualité des informations diffusées sur son site.
                    Les informations fournies le sont à titre indicatif.
                    L’utilisateur reconnaît utiliser les informations sur le site sous sa responsabilité exclusive.
                </p>
                <br/>
                <h1 className='colorTitle'>Loi applicable</h1>
                <p>Le présent site est soumis à la loi française.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default MentionLegal;
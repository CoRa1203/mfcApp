import './ServiceCard.scss'

const ServiceCard = function(cardText){
    return (
        <div className="x ServiceCard">
            <p className="ServiceCardText">{cardText.cardText}</p>
        </div> 
    )
}

export default ServiceCard;

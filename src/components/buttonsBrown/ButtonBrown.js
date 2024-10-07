import './ButtonBrown.scss'

 const ButtonBrown = function(props){
    return(
        <button className='ButtonBrown' onClick={props.onClick}><p>{props.text}</p></button>
    )
}


export default ButtonBrown;
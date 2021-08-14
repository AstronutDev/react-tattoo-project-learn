import './Tattooitem.css'


function TattoItem(props) {
    const {tattoo, onTattooClick} = props

    return (
        <div className="tattoo-item">
            <img src={tattoo.thumnailURL} alt="" className="eachImg" onClick={() => {onTattooClick(tattoo)}}/>
            <h4 className="pic-title">{tattoo.title}</h4>
        </div>
    )
}

export default TattoItem
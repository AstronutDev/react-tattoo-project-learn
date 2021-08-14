import './Tattoopost.css'

function TattooPost(props) {
    const {tattoo, onbgClick} = props
    return(
        <div className="tattoo-post">
            <div className="tattoo-post-bg" onClick={onbgClick} />
            <div className="tattoo-post-content">
                <img src={tattoo.thumnailURL} alt="" />
                <h4 className="pic-title">{tattoo.title}</h4>
            </div>

        </div>
    )
}

export default TattooPost
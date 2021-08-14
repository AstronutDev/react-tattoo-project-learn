import './Appsearch.css'

function Appsearch(props: any) {
    const {value, onValueChange} = props
    return (
        <div className='app-search'>
        <input 
        className="ap-search-input" 
        type="text"
        placeholder="ค้นหา..."
        value={value}
        onChange={(event) => {onValueChange(event.target.value)}}
        />
        </div>
    )
}

export default Appsearch

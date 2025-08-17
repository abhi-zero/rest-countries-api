


export default function Flag({
    imgUrl,
    name
}){

    return(
        <div className="min-w-[28rem] min-h-[20rem] object-cover">
            <img className='w-[28rem] h-[20rem] object-contain' src={imgUrl} alt={name} />
        </div>
    )
}
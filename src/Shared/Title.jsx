const Title = ({title, subTitle}) =>{
    return(
        <div className="text-center my-10">
            <h2 className="font-bold text-4xl my-4">{title}</h2>
            <p>{subTitle}</p>
        </div>
    )
}

export default Title
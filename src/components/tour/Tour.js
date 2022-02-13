
export default function Tour(props){
    return(
        <div className="card" style={{display:"flex",
            flexWrap:"wrap",alignItems:"center",justifyContent:"center" }}>
            {
                props.data2.map(element=>{
                    return(
                        <div key={element.id} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"10px",backgroundColor:"#1597E5",borderRadius:"10%"}} >
                            <h1 style={{}}>{element.name}</h1>
                            <img style={{width:"370px",height:"310px"}} src={element.image} alt={element.name} />
                            
                        </div>
                    )
                })
            }
        </div>

    )
}
// ,width:"500px",height:"500px"
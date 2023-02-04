import './Sobremim.css'

function Sobremim(props){
    const css = {backgroundColor:props.corSecundariaSobre}
    return(
            <section className='sobre' style={css}>
                <h5 style={{borderColor: props.corPrimariaSobre}}>{props.nomeSobre}</h5>

                <div className='sobrees'>
                    
                <div className='container'>
                     <img src="https://github.com/Luikemc.png" alt="Luiz Henrique" className='image'></img>
                        <div className='middle'>
                        <div className='text'>Ola, Me chamo Luiz Henrique Martins Chaves. Por meio desse portifolio venho 
                                            demonstrar meus conhecimentos e minhas habilidades para assim realmente conseguir um
                                            verdadeiro estatio/emprego e adquirir experiencia.
                                            No momento so tive experiencia em suporte em uma multi nascional chamada fresenius kabi. </div>
                 </div>
                    </div>
                </div>
            </section>
    )
}

export default Sobremim


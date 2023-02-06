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
                        <div className='text'>Ola, Me chamo Luiz Henrique Martins Chaves. Estou cursando Bacharelado em Ciências da Computação no Instituto Federal de Goiás em Anápolis (IFG), Goiás. 
                                            Tenho conhecimento na área de suporte e Front-End utilizando ferramentas como  HTML, CSS, JAVASCRIPT, REACT JS, GITHUB, MYSQL. 
                                            Tenho conhecimento em metodologias ágeis como SCRUM.. 
                                       </div>
                 </div>
                    </div>
                </div>
            </section>
    )
}

export default Sobremim


import './Contato.css'

function Contato(props){
        
        return(
            <div className='geralcontatos'>
                            <div className='cabecalhocontatos'>
                            <img src={props.imagensContato} alt='tentando'/>
                            </div>
                        <div className='rodapecontatos'>
                            <a href={props.urlContato}>
                                <h6>
                                    {props.nomeContato}
                                </h6>
                            </a>
                            <h3>{props.info}</h3>
                        </div>
                    </div>
                
        )
}

export default Contato


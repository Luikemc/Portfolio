import './Aplicacoes.css'


    function Aplicacoes(props){

        
        return(
            <div className='geral'>
                <div className='cabecalho'>
                <img src={props.imagemProjeto} alt='luiz henrique'/>
                </div>
                <div className='rodape'>
                <a href={props.url}>
                    <h4>
                        {props.nomeProjeto}
                    </h4>
                </a>
                <h5>{props.descricaoProjeto}</h5>
                </div>


            </div>
        )
    }

export default Aplicacoes
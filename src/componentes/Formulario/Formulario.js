import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'
import {useState} from 'react'
import emailjs from '@emailjs/browser'

function Formulario(props){

        const times = [

            'Sim',
            'Nao'
        ] 

        const [nome, setNome] = useState('')
        const [empresa, setEmpresa] = useState('')
        const [cargo, setCargo] = useState('')
        const [time, setTime] = useState('')
        const [numero, setNumero] = useState('')
            
        const aoSalvar = (evento) => {
            evento.preventDefault()
            props.aoColaboradorCadastrado({
                nome,
                empresa,
                cargo,
                time,
                numero
            })
            const templateParams = {
                nome: nome,
                empresa: empresa,
                cargo: cargo,
                curriculo: time,
                numero: numero
            }
                emailjs.send("service_169khrn", "template_iqhamyx", templateParams, "B3YFOoysuekp7vLcc")
                .then((response) =>{
                    console.log("Enviado", response.status, response.text)
                    setNome('')
                    setEmpresa('')
                    setCargo('')
                    setTime('')
                    setNumero('')
                })

        }
       
    return(
        <section className="formulario">


            <form onSubmit={aoSalvar}>

                <h2>Digite As Informacoes de Acordo com a Sua Empresa</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Empresa"
                    placeholder="Digite o Nome da Empresa"
                    valor={empresa}
                    aoAlterado={valor => setEmpresa(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Cargo Dentro da Empresa"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto 
                    obrigatorio={true} 
                    label="Numero"
                    placeholder="Numero de celular ou empresarial"
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label= "Mandei Curriculo?" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    
                />
                <Botao>
                    Enviar
                </Botao>
            </form>
        </section>
    )

}

export default Formulario
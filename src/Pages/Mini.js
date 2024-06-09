// images
import mini from '../assets/images/mini.png'

//components

import Accordion from '../Components/Accordion';

const Mini = () => {
    return (
        <div className="mt-16 px-[5%]">
            <h2 className="w-full mb-8 text-primary-medium text-5xl max-sm:text-4xl">
                O que é Minilaparoscopia?
            </h2>

            <div className="mb-8">
                <p className="max-sm:text-lg text-xl">Minilaparoscopia – incisões ainda menores que a laparoscopia.</p>
                <br/>
                <p className="max-sm:text-lg text-xl">
                    A minilaparoscopia é uma técnica de cirurgia minimamente invasiva que deixas cicatrizes ainda menores, se comparada a videolaparoscopia.
                    Além disso, reduz o risco de hérnias e provoca menos dor no pós-operatório.
                </p>
                <br/>
                <p className="max-sm:text-lg text-xl">
                    Desde sua primeira descrição em 1887, a colecistectomia aberta vem sofrendo aperfeiçoamentos em sua técnica, possibilitando, cada vez mais, melhores resultados.
                    A partir da década de 1980,começaram as primeiras publicações sobre a intervenção videolaparoscópica na colecistectomia iniciando uma corrida por
                    procedimentos minimamente invasivos para resolução desse quadro.
                </p>
                <br/>
                <p className="max-sm:text-lg text-xl">
                    Com o avanço da tecnologia minimamente invasiva foi possível desenvolver equipamentos com diâmetros ainda mais reduzidos que os tradicionais de 5mm que culminou com o
                    “state of the art” dos equipamentos laparoscópicos de 2 e 3mm, também conhecidos como ¨Minilaparoscópicos ou “agulhoscópicos”,
                    possibilitando melhores resultados às já comprovadas vantagens da cirurgia laparoscópica, sem perda na eficiência cirúrgica e
                    com ganhos significantes na estética dor e precisão do procedimento.
                </p>
                <br/>
                <p className="max-sm:text-lg text-xl">
                    Com minilaparosocpia é possível fazer a mesma técnica videolaparoscópica, mas traumatizando menos o paciente, o que ajuda para uma recuperação mais rápida.
                    Como as incisões MINI são pequenas, não é preciso pontos cirúrgicos para fecha-las, usamos apenas um curativo adesivo por 3 a 5 dias e além da dor ser mínima,
                    o resultado estético é muito bom.
                </p>
                <br/>
                <p className="max-sm:text-lg text-xl">As principais características da minilaparoscopia são:</p>
                <ul className="max-sm:text-lg text-xl">
                    <li className="ml-8">● Menor dor;</li>
                    <li className="ml-8">● Menor trauma da parede abdominal;</li>
                    <li className="ml-8">● Menor formação de hérnias;</li>
                    <li className="ml-8">● Rápida recuperação pós-operatória;</li>
                    <li className="ml-8">● Breve retorno à atividade profissional;</li>
                    <li className="ml-8">● Melhores resultados estéticos;</li>
                    <li className="ml-8">● Melhor precisão cirúrgica.</li>
                </ul>
            </div>

            <div className="w-full mb-16 flex justify-center">
                <img className="rounded-xl" alt="Mini" src={mini}/>
            </div>

            <h3 className="w-full mb-16 text-primary-medium text-3xl max-sm:text-2xl">PERGUNTAS FREQUENTES</h3>

            <Accordion label="A minilaparoscopia doi muito? ">
                Uma cirurgia laparoscópica doi pouco, uma minilaparoscópica doi menos ainda, e pode ser considerada praticamente indolor.
            </Accordion>
            <Accordion label="Como ficam as cicatrizes da minilaparoscopia? ">
                Uma cirurgia laparoscópica evolui com cicatrizes bem pequenas, uma minilaparoscópica como são muito menores,
                aprox 2mm, pode ser considerada praticamente sem cicatrizes.
            </Accordion>
            <Accordion label="A minilaparoscopia é muito cara?">
                Só um pouco mais caro que uma laparoscópica convencional e muito menos custosa que uma robótica,
                que provoca cicatrizes bem maiores que a minilaparoscopia. Tendo portanto um excelente custo benefício.
            </Accordion>
            <Accordion label="Qual o tempo de recuperação da minilaparoscopia">
                Varia do porte e da gravidade do caso, mas em geral de 48h a 1 semana é o esperado.
            </Accordion>
            <Accordion label="Como é a vida após a minilaparoscopia?">
                Em geral com poucos dias o paciente nem se lembra que foi operado. E sequer vai ver as ciatrizes.
            </Accordion>

            <h2 className="w-full mt-16 mb-8 text-primary-medium text-3xl max-sm:text-2xl">HISTÓRIA DA MINILAPAROSCOPIA NO BRASIL</h2>
            <p>
                ESSA HISTORIA 'E LONGA'???????
            </p>

            <h2 className="w-full mb-8 text-primary-medium text-3xl max-sm:text-2xl">TRABALHOS RECENTEMENTE PUBLICADOS POR DR. GUSTAVO CARVALHO</h2>

            <h3 className="w-full mb-8 text-primary-medium text-3xl max-sm:text-2xl">● Artigos</h3>

            <h3 className="w-full mb-8 text-primary-medium text-3xl max-sm:text-2xl">● Apresentação e Pôsteres</h3>
        </div>
    );
}

export default Mini;
//icons
import body from '../assets/icons/body.svg';
import lessPain from '../assets/icons/lessPain.svg';
import regeneration from '../assets/icons/regeneration.svg';

// images
import surgery from '../assets/images/miniSurgery.png'
import surgery2 from '../assets/images/surgery2.png'
import surgery3 from '../assets/images/surgery3.png'

//components

import Accordion from '../Components/Accordion';

const Video = () => {
    return (
        <div className="mt-16 px-[5%]">
            <div className="w-full mb-8 text-primary-medium text-6xl max-sm:text-4xl">
                O que é a cirurgia por videolaparoscopia?
            </div>

            <div className="flex max-sm:flex-col gap-16 mb-8 flex-1">
                <div>
                    <p className="mb-4 text-lg">
                        Considerada uma das maiores evoluções tecnológicas da medicina cirúrgica, a videolaparoscopia consiste em uma técnica minimamente invasiva que utiliza um sistema de imagens acoplado a um endoscópio (laparoscópico) e instrumentais introduzidos no organismo através de pequenas incisões para que se possa operar diferentes órgãos e tecidos. A utilização desta tecnologia permite redução significante no trauma cirúrgico e por conseguinte na dor e nas complicações pós-operatórias, proporcionando um retorno mais rápido do paciente às suas atividades habituais.
                    </p>
                    <p className="text-lg">
                            Em síntese, é um tipo de cirurgia abdominal que é executada através de pequenos orifícios no abdômen do paciente.
                            Este tipo de cirurgia é também chamado de cirurgia de invasão mínima. O interesse de cirurgiões e pacientes na busca por técnicas menos invasivas
                            e de melhores resultados estéticos favoreceu o crescente número de cirurgias videolaparoscópicas, ou seja, feitas através de pequenos orifícios.
                            Estes orifícios são geralmente de diâmetro que variam de 5 a 12mm de diâmetro. Um dos orifícios é utilizado para introduzir uma câmera de vídeo (laparoscópico),
                            e esta câmera acoplada a um monitor de video, por isso é chamada de videolaparoscopia. Pelos demais orifícios são introduzidos, introduzidos os demais instrumentos
                            cirúrgicos como pinças, tesouras e bisturi elétrico. Se estes orifícios são ainda menores que 5mm (2-3mm) este tipo de cirurgia é conhecido como minilaparoscopia.
                    </p>
                </div>
                    <img alt="surgery" className="rounded-xl" src={surgery}/>
            </div>

            <Accordion label="Para que serve a videolaparoscopia">
                    A videolaparoscopia serve para que um cirurgião treinado nesta técnica minimamente
                invasiva possa realizar as mesmas cirurgias que seriam feitas abrindo o abdome do
                paciente com grande cortes – Cirurgia Aberta. Cirurgias habituais como retirada da vesícula,
                apêndice, baço e adrenal são exemplos de cirurgias feitas por videolaparoscopia.
            </Accordion>
            <Accordion label="Quais são os riscos da videolaparoscopia">
                    Os principais riscos da videolaparoscopia são as lesões que podem ocorrer em outros
                órgãos. Também há riscos de sangramentos e perfurações inadvertidas no intestino. Uma
                equipe bem treinada com equipamentos de alta qualidade pode minimizar estes riscos.
            </Accordion>
            <Accordion label="Como é o pré-operatório por videolaparoscopia">
                    No pre-operatório são necessárias consultas a um cirurgião e um anestesista, bem como
                são realizados exames de sangue e de imagem, relativos á doença ou órgão que sera
                operado.
            </Accordion>
            <Accordion label="Como é a recuperação da videolaparoscopia">
                    A recuperação de uma cirurgia laparoscópica bem sucedida é significativamente mais
                rápida que uma cirurgia aberta, variando de poucos dias a uma semana. Em se tratando de
                minilaparoscopia esta recuperação é ainda mais rápida.
            </Accordion>

            <div className="w-full mb-8 text-center text-primary-medium text-6xl max-sm:text-4xl">
                Como é realizada a cirurgia videolaparoscopica
            </div>

            <div className="flex w-full max-sm:flex-col gap-16 mb-16 justify-center">
                  <img alt="surgery" className="rounded-xl" src={surgery3}/>
                  <img alt="surgery" className="rounded-xl" src={surgery2}/>
            </div>

            <div className="w-full mb-8 text-center text-primary-medium text-6xl max-sm:text-4xl">
                Vantagens da Videolaparoscopia
            </div>

            <div className="flex w-full max-sm:flex-col gap-16 mb-16 items-center justify-center">
                <img alt='regeneration' width={300} src={regeneration}/>
                <img alt='lessPain' width={300} src={lessPain}/>
                <img alt='body' width={300} src={body}/>
            </div>
        </div>
    );
}

export default Video;
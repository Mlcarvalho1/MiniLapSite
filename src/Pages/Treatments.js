//Images
import billy from "../assets/images/billy.png"
import reflux from "../assets/images/reflux.png"
import barret from "../assets/images/barret.png"

//Components
import Accordion from "../Components/Accordion";

const Treatments = () => (
    <div className="mt-16 px-[5%]">
            <h2 className="w-full mb-8 text-primary-medium text-5xl max-sm:text-4xl">
                O que é Refluxo Gastro-Esofágico?
            </h2>

            <p className="max-sm:text-lg text-xl mb-8">
                Refluxo GE se caracteriza quando o conteúdo do estomago volta para o esôfago em uma quantidade tão importante
                que o ácido do estômago provoca danos no nele. As vezes o refluxo chega à parte alta do esôfago podendo ir para
                as vias aéreas do paciente causando desde rouquidão, tosse crônica e em alguns casos pneumonia de repetição,
                achado frequente em idosos que têm hernias do HIATO DIAFRAGMÀTICO.
            </p>

            <div className="w-full mb-16 flex justify-center">
                <img className="rounded-xl" alt="Mini" src={reflux}/>
            </div>

            <Accordion label="Como saber se eu tenho refluxo gastro-esofágico">
                    Os sintomas mais comuns do RGE são a dor e a queimação perto do coração, sintomas
                menos típicos podem ser tosse crônica, rouquidão ou infeções pulmonares de repetição.
                Em algumas situações o RGE pode dar falta de ar e simular até mesmo crises asmáticas.
                Uma das causas do RGE é a hérnia de hiato, situação em que uma parte do estômago
                avança ao tórax pelo diafragma.
            </Accordion>
            <Accordion label="Como tratar o refluxo gastro-esofágico">
                    O tratamento do RGE é basicamente feito com drogas inibidoras da produção de ácido
                pelo estômago, bem como drogas que melhorem a motricidade do esôgfago e do estômago
                (procineticos). Os casos que não se conegue resolver adequadamente com remédios
                podem ser operados.
            </Accordion>
            <Accordion label="Cirurgia para refluxo gastro-esofágico">
                    A nossa opção é realizar a cirurgia minilaparoscópica para o RGE, que associa os
                mesmos procedimentos da técnica aberta ou laparoscópica a orifícios mínimos (3mm) que
                minimizam a dor e o trauma cirúrgico. Na videolaparoscopia tradicional, são feitas em geral cinco incisões
                de 5mm a 12mm, por onde os médicos introduzirem os trocateres,
                pequenos tubos pelos quais os cirurgiões passam os instrumentos
                cirúrgicos. O corte maior é de 12mm, serve de acesso à câmera. Na
                minilaparoscopia, além de uma incisão umbilical, que fica quase
                imperceptível, são feitos três a quatro pequenos furos com
                tamanhos 3mm.
            </Accordion>

            <h2 className="w-full mb-8 text-primary-medium text-5xl max-sm:text-4xl">
                O que é Esôfago de Barrett?
            </h2>

            <div className="w-full max-sm:flex-col mb-16 flex gap-16 justify-center">
                <div>
                    <p className="max-sm:text-lg text-xl mb-8">
                        O esôfago de Barret é uma transformação metaplasia (estágio que antecede ao câncer)
                        que ocorre na superfície mucosa do esôfago, em geral decorrente de DRGE que não foi
                        tratada adequadamente. O EB pode evoluir para um câncer.
                    </p>

                    <Accordion label="O que é Esôfago de Barrett?">
                            O esôfago de Barret é uma transformação metaplásica (estágio que antecede ao câncer)
                        que ocorre na superfície mucosa do esôfage, em geral decorrente de DRGE que não foi
                        tratada adequadamente. O EB pode evoluir para um câncer.
                    </Accordion>
                    <Accordion label="Como saber se eu tenho esôfago de barrett?">
                            Os sintomas do EB são basicamente os mesmos da DRG, ´so que em menor
                        intensidade, uma vez que a METAPLASIA de BARRETT suporta melhor a queimadura do
                        ácido que a mucosa normal do esôfago. O diagnóstico é feito mediante a realização de
                        endoscopia com biópsia, par5a confirmar a presença do EB
                    </Accordion>
                    <Accordion label="Como tratar o esôfago de barrett?">
                            diversas são as opções de tratamento para o esôfago de BARRTETT, que ão desde a
                        returada de um BARRTETT que se transformou em câncer por cirurgia aberta ou se ainda é
                        somente displásico por endoscopia. porém nós preconizamos a cirurgia antirefluxo, seguida
                        de uma retirada endoscópica do EB, caso o EB não regredir espontaneamente após a
                        cirurgia ou evoluir para um câncer precoce.
                    </Accordion>
                    <Accordion label="Cirurgia para esôfago de barrett">
                            Realizamos cirurgias antireflux, preferencialmente com válvula total de 360 graus,
                        cirurgia de Nissen, por minilaparoscopia.
                    </Accordion>    
                </div>

                <img className="flex-1rounded-xl" alt="Mini" src={barret}/>
            </div>

            <h2 className="w-full mb-8 text-primary-medium text-5xl max-sm:text-4xl">
                  O que é a Doença da Vesícula Biliar?
            </h2>

            <p className="max-sm:text-lg text-xl mb-8">
                A doença mais comum da vesícula biliar é a formação de pedras em seu interior, estas pedras podem inflamar a vesícula,
                originando diversos sintomas ocasionando a necessidade de remoção da vesícula biliar. As vesículas também podem aparecer
                com pequenos tumores pólipos, situação que as vezes também acarretam sua retirada.
            </p>

            <div className="w-full mb-16 flex justify-center">
                <img className="rounded-xl" alt="Mini" src={billy}/>
            </div>

            <Accordion label="Como saber se tenho pedra na vesícula biliar?">
                O melhor exame e o ULKTRASSON+M do abdome
            </Accordion>
            <Accordion label="Como tratar pedra na vesícula biliar?">
                    A pedra é tratada com a retirada
                total da vesícula biliar (Colecistectomia). A retirada simplesmente da pedra
                ocasiona a formação de novas pedras e é uma opção ruim. A colecistectomia
                é um dos procedimentos cirúrgicos mais realizados no mundo.
            </Accordion>
            <Accordion label="Cirurgia para pedra na vesícula biliar?">
                    Retirada total da veiscula biliar
                e nossa opção e a técnica minilaparoscopica
            </Accordion>
            <Accordion label="Riscos de pedra na vesícula biliar?">
                    Diversos são os riscos que vao desde a colecistita aguda situação
                que pode culminar com a perfuração da VB, bem como na ocorrência de
                pequenas pedras estas podem sair peolo canal da vesícula e irem entupir o
                canal do fígado ou causar pancreatite após passar irritando o canal
                pancreático. A pancreatite é uma GRAVE complicação das pedras que sem
                da VB
            </Accordion>
        </div>
)

export default Treatments;

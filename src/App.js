import Diagrama1 from "./Diagrama1";
import Diagrama2 from "./Diagrama2";
import Diagrama3 from "./Diagrama3";
import Diagrama4 from "./Diagrama4";
import { useState } from "react";
import Diagrama5 from "./Diagrama5";
import { ActionContainer, Button, Container, DiagramContainer, DiagramTitle } from "./style";

const diagrams = [
    { id: 0, component: Diagrama1, name: "", value: 0 },
    { id: 1, component: Diagrama2, name: "Natural", value: 0 },
    { id: 2, component: Diagrama3, name: "Melódica", value: 0 },
    { id: 3, component: Diagrama4, name: "Harmônica", value: 0 },
    { id: 4, component: Diagrama5, name: "Cromática", value: 0 },
]

const App = () => {
    const [selectedDiagram, setSelectedDiagram] = useState("Selecione um Diagrama")
    const [diagramStates, setDiagramStates] = useState(diagrams.map(diagram => ({
        id: diagram.id,
        value: 0,
        component: null,
        name: "",
        value: 0
    })));

    const handleNext = () => {
        setDiagramStates(prevStates => prevStates.map(diagramState => ({
            ...diagramState,
            value: diagramState.id === selectedDiagram.id ? diagramState.value + 30 : diagramState.value
        })));
    }

    const handleBack = () => {
        setDiagramStates(prevStates => prevStates.map(diagramState => ({
            ...diagramState,
            value: diagramState.id === selectedDiagram.id ? diagramState.value - 30 : diagramState.value
        })));
    }

    const handleSelectDiagram = (diagramId) => {
        const selectedDiagram = diagrams.find(diagram => diagram.id === diagramId);
        setSelectedDiagram(selectedDiagram);
    }

    return (
        <Container>
            <DiagramContainer>
                {diagramStates.map((diagramState) => {
                    const { id, value } = diagramState;
                    const DiagramComponent = diagrams.find(diagram => diagram.id === id).component;

                    return (
                        <DiagramComponent
                            onSelect={() => handleSelectDiagram(diagramState.id)}
                            selected={selectedDiagram?.id === id}
                            action={value} key={id}
                        />
                    )
                })}
            </DiagramContainer>
            <ActionContainer>
                <DiagramTitle>{selectedDiagram.name || "Selecione um Diagrama"}</DiagramTitle>
                <div>
                    <Button disabled={selectedDiagram.id === 0} onClick={handleBack}>Voltar</Button>
                    <Button disabled={selectedDiagram.id === 0} onClick={handleNext}>Avançar</Button>
                </div>
            </ActionContainer>
        </Container>
    )
}

export default App;
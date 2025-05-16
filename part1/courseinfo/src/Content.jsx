const Content = (props) => (
    <>
        {props.parts.map((element, index) => (
            <Part 
                key={index} 
                name={element.name} 
                exercises={element.exercises} 
            />
        ))}
    </>
)

const Part = (props) => (
    <p>
        {props.name} {props.exercises}
    </p>
)

export default Content



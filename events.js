function SimpleEvent(props) {
    const { name } = props;
    const { num1 } = props;
    const { num2 } = props;
    
    const showNum = (e) => {

        e.target.innerHTML = name;

        if (num1 > 100){
            e.target.innerHTML = `${name} <br/> ${num1}`
        }

        if (num2 > num1){
            e.target.innerHTML = `${name} <br/> ${num1} <br/> ${num2}`
        }
        
    };
    
    return (
        <div onClick={showNum}>Click Me</div>
    );
}

const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(<SimpleEvent name="Alex" num1="101" num2 = "102" />);

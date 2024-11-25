import "./EV.css"

export function EventPropagation() {

    const handleGrandParent = () => {
        console.log('GrandParent clicked');
    };

    const handleParentClick = () => {
        console.log('Parent clicked');
    };

    const handleChildClick = (event) => {
        // console.log(event);
        event.stopPropagation(); // stops the event from bubbling up to the parent element.
        console.log('Child clicked');
    };
 
    return(
        // <h1>EventPropagation</h1>
        <section className="main-div">
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                     Child Div
                    </button>
                </div>
            </div>
        </section>
    );
};


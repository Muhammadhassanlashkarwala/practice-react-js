
const Practice = () => {
    const emptyArray = [12, 18];
    // const interview = "Interview Of Muhammad Hassan"
    return(
        <>
        <p>{emptyArray.length == 0 && "No students found!"}</p>
        <p>Numbers Of Students: {emptyArray.length}</p>
        </>
    )
}

export default Practice;
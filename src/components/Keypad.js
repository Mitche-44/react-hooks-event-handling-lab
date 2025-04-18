// Code Keypad Component Here

function Keypad (){
 function handleChange(event) {
    console.log("Entering password...");
  }

    return (
        <div>
            <form>
                <input type="password" text="Entering password"  onChange={handleChange}/>



            </form>



        </div>
    )
}

export default Keypad;
export default function Box(){
    function handleClick(){
        console.log("Clicked");
      }
    return (
        <div className="box" onClick={handleClick}></div>
    )
}
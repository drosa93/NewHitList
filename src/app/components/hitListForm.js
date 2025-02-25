function HitListForm(){
    return(
        <div>
             <form className="p-2" action="">
      <input type="text" name="companyName" placeholder="Company Name"/>
      <input type="date" name="dateAdded" placeholder="Date"/>
      <input type="text" name="location" placeholder="location"/>
      <input type="text" name="positionType" placeholder="Position"/>
      <input type="text" name="role" placeholder="Role"/>
      <input type="text" name="source" placeholder="website"/>
      <button className="btn btn-primary">Submit</button>
    </form>
    <ul>
    </ul>
    <div id="app"></div>
        </div>
    )
}

export default HitListForm;
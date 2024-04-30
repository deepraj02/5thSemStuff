import './App.css';
import Record from './Components/Record';

function App() {
  return (
    <>
    <div style={{width:"100%",height:"100px",display:"flex",marginTop:"50px"}}>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Roll No.</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Name</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Branch</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Subject</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Marks</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Percentage</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>City</div>
      <div style={{width:"14.2%",height:"100%",textAlign:"center",fontWeight:"bold"}}>Phone No.</div>
    </div>

    <Record name="Student1" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student2" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student3" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student4" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student5" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student6" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student7" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student8" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student9" rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    <Record name="Student10 " rollno="XXXXX" marks="75" percentage="75%" city="Dehradun" phone="XXXXXXXXXX"/>
    </>
  );
}

export default App;